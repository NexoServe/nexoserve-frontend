import { useEffect, useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';
import { DateTime } from 'luxon';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRecoilState } from 'recoil';

import { useRestaurantLazyQuery } from '../../generated/graphql';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';
import prisma from '../../lib/prisma';
import Container from '../components/Container/Container';
import FoodList from '../components/Food/FoodList/FoodList';
import Loader from '../components/Loader/Loader';
import { ModalPopUp } from '../components/Modal/Modal';
import Navbar from '../components/Navbar/Navbar';
import OrderNavbar from '../components/OrderNavbar/OrderNavbar/OrderNavbar';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartButton from '../components/ShoppingCart/ShoppingCartButton/ShoppingCartButton';
import ShoppingCartModal from '../components/ShoppingCart/ShoppingCartModal/ShoppingCartModal';
import { FoodMenuAtom } from '../state/FoodModalState';
import {
  OrderDateAtom,
  OrderOpeningHoursAtom,
  OrderTimeAtom,
} from '../state/OrderNavbar';

import useStyles from './index/css';

const Home: NextPage = () => {
  const [, setOpeningHours] = useRecoilState(OrderOpeningHoursAtom);
  const [, setMenu] = useRecoilState(FoodMenuAtom);
  const [, setOrderTime] = useRecoilState(OrderTimeAtom);
  const [, setOrderDate] = useRecoilState(OrderDateAtom);

  const classes = useStyles();

  const orderTimeLocalStorage = localStorage.getItem('orderTime');
  console.log('orderTimeLocalStorage', orderTimeLocalStorage);

  let orderTimeParsed: { label: string; value: string } | null = null;
  try {
    orderTimeParsed = JSON.parse(orderTimeLocalStorage as string);
  } catch (error) {
    // localStorage.removeItem('orderTime');
  }

  console.log('orderTimeParsed', orderTimeParsed);

  const [restaurantQuery, { data, loading, error }] = useRestaurantLazyQuery();

  useEffect(() => {
    restaurantQuery({
      variables: {
        restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
        orderTime: orderTimeParsed ? orderTimeParsed?.value : 'ASAP',
      },
    });
  }, []);

  useMemo(() => {
    if (!loading && !error && data?.restaurant) {
      setMenu(data?.restaurant.menu);

      setOpeningHours({
        openingHours: data?.restaurant.openingHours,
        isOpenNow: data?.restaurant.isOpenNow,
        currentDateTime: data?.restaurant.currentDateTime,
        isOrderTimeValid: data?.restaurant.isOrderTimeValid,
        timezone: data?.restaurant.timezone,
      });

      if (data.restaurant.isOrderTimeValid && orderTimeParsed) {
        setOrderTime({
          label: orderTimeParsed?.label,
          value: DateTime.fromISO(orderTimeParsed?.value as string),
        });

        const isToday = DateTime.fromISO(
          orderTimeParsed?.value as string,
        ).hasSame(
          DateTime.fromISO(data?.restaurant.currentDateTime as string),
          'day',
        );

        const dateTime = DateTime.fromISO(orderTimeParsed?.value as string);
        const dateTimeWithZone = dateTime.setZone(data.restaurant.timezone);

        setOrderDate((prevState) => ({
          ...prevState,
          label:
            orderTimeParsed?.value === 'ASAP'
              ? 'Today'
              : isToday
              ? 'Today'
              : DateTime.fromISO(orderTimeParsed?.value as string).toFormat(
                  'EEE, MMM dd',
                ),
          value: dateTimeWithZone,
        }));
      }
    }
  }, [data]);

  if (loading)
    return (
      <AnimatePresence>
        {loading && (
          <ModalPopUp showModal={loading}>
            <Loader />
          </ModalPopUp>
        )}
      </AnimatePresence>
    );

  console.log('data', data);

  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <OrderNavbar />
        <Container>
          <div className={classes.indexConatiner}>
            <FoodList />
            <ShoppingCart styleClass={classes.indexShoppingCartDesktop} />
            <ShoppingCartModal />
            <ShoppingCartButton />
          </div>
        </Container>
      </main>
    </div>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  //TODO: add ssr
  // await apolloClient.query({ query: FoodsDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
