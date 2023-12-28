import { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import CheckoutContact from '../../components/Checkout/CheckoutContact/CheckoutContact';
import CheckoutDetails from '../../components/Checkout/CheckoutDetails/CheckoutDetails';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import getRestaurantDetails from '../../utils/getRestaurantDetails';

import useStyles from './css';

export async function getStaticProps() {
  const data = await getRestaurantDetails();

  return {
    props: {
      ...data,
    },
  };
}

const Checkout = (props: RestaurantDetailsQuery) => {
  const classes = useStyles();
  const router = useRouter();

  const shoppingCartStorage = localStorage.getItem('shoppingCartItems');
  const orderTimeStorage = localStorage.getItem('orderTime');

  useEffect(() => {
    if (!shoppingCartStorage || !orderTimeStorage) {
      router.push('/');
    }
  }, [shoppingCartStorage, orderTimeStorage]);

  return (
    <>
      <PageContainer>
        <Head>
          <title>TypeScript starter for Next.js</title>
          <meta
            name="description"
            content="TypeScript starter for Next.js that includes all you need to build amazing apps"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Navbar
            logo={props.restaurantDetails.logo}
            restaurantName={props.restaurantDetails.name}
          />
          <Container>
            <div className={classes.checkout}>
              <CheckoutDetails />
              <CheckoutContact />
              <CheckoutOrder />
              <CheckoutPayment />
            </div>
          </Container>
        </main>
      </PageContainer>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
      />
    </>
  );
};

export default Checkout;
