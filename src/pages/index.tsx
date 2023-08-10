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
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderIsPickUpAtom,
  OrderOpeningHoursAtom,
  OrderTimeAtom,
} from '../state/OrderNavbar';

import useStyles from './index/css';

const Home: NextPage = () => {
  const [, setOpeningHours] = useRecoilState(OrderOpeningHoursAtom);
  const [, setMenu] = useRecoilState(FoodMenuAtom);
  const [, setOrderTime] = useRecoilState(OrderTimeAtom);
  const [, setOrderDate] = useRecoilState(OrderDateAtom);
  const [, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);
  const [, setDeliveryAddress] = useRecoilState(OrderDeliveryAddressAtom);
  const [, setAdditionalAddressInfo] = useRecoilState(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const [, setDeliveryDetails] = useRecoilState(OrderDeliveryDetailsAtom);

  const classes = useStyles();

  const orderTimeStorage = localStorage.getItem('orderTime');
  const orderIsPickUpStorage = localStorage.getItem('isPickUp');
  const orderDeliveryAddressStorage = localStorage.getItem('deliveryAddress');
  const orderDeliveryAddressAdditionalInfoStorage = localStorage.getItem(
    'deliveryAddiotionalInfo',
  );
  const orderDeliveryDetails = localStorage.getItem('deliveryDetails');

  let orderTimeParsed: { label: string; value: string } | null = null;
  let orderIsPickUpParsed: boolean;
  let orderDeliveryAddressParsed: string;
  let orderDeliveryAddressAdditionalInfoParsed: string;
  let orderDeliveryDetailsParsed: string;

  try {
    orderTimeParsed = JSON.parse(orderTimeStorage as string);
    orderDeliveryAddressParsed = JSON.parse(
      orderDeliveryAddressStorage as string,
    );
    orderIsPickUpParsed = JSON.parse(orderIsPickUpStorage as string);
    orderDeliveryAddressAdditionalInfoParsed = JSON.parse(
      orderDeliveryAddressAdditionalInfoStorage as string,
    );
    orderDeliveryDetailsParsed = JSON.parse(orderDeliveryDetails as string);
  } catch (error) {
    // localStorage.removeItem('orderTime');
  }

  const [restaurantQuery, { data, loading, error }] = useRestaurantLazyQuery();

  useEffect(() => {
    restaurantQuery({
      variables: {
        input: {
          restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
          orderTime: orderTimeParsed ? orderTimeParsed?.value : 'ASAP',
          isPickUp: orderIsPickUpParsed,
          deliveryAddress: orderDeliveryAddressParsed,
          deliveryAddressAdditionalInfo:
            orderDeliveryAddressAdditionalInfoParsed,
          deliveryDetails: orderDeliveryDetailsParsed,
        },
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
      if (data.restaurant.isDeliveryAddressValid) {
        if (!data.restaurant.isPickUp) {
          setIsPickUp(false);
          setDeliveryAddress(data.restaurant.deliveryAddress as string);
          console.log(
            'data.restaurant.deliveryAddressAdditionalInfo',
            data.restaurant.deliveryAddressAdditionalInfo,
          );
          if (
            data.restaurant.deliveryAddressAdditionalInfo !== undefined &&
            data.restaurant.deliveryAddressAdditionalInfo !== null
          ) {
            setAdditionalAddressInfo(
              data.restaurant.deliveryAddressAdditionalInfo,
            );
          }
          if (data.restaurant.deliveryDetails) {
            setDeliveryDetails(data.restaurant.deliveryDetails as string);
          }
        }
      } else {
        setIsPickUp(true);
        localStorage.removeItem('deliveryAddress');
        localStorage.removeItem('deliveryAddiotionalInfo');
        localStorage.removeItem('deliveryDetails');
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

  // TODO: add ssr
  // await apolloClient.query({ query: FoodsDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
