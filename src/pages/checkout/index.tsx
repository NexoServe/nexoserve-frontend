import Head from 'next/head';
import { useRouter } from 'next/router';

import CheckoutContact from '../../components/Checkout/CheckoutContact/CheckoutContact';
import CheckoutDetails from '../../components/Checkout/CheckoutDetails/CheckoutDetails';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import Container from '../../components/Container/Container';
import InfoModal from '../../components/InfoModal/InfoModal';
import Navbar from '../../components/Navbar/Navbar';
import PageContainer from '../../components/PageContainer/PageContainer';

import useStyles from './css';

const Checkout = () => {
  const classes = useStyles();
  const router = useRouter();

  const shoppingCartStorage = localStorage.getItem('shoppingCartItems');
  const orderTimeStorage = localStorage.getItem('orderTime');

  if (!shoppingCartStorage || !orderTimeStorage) {
    router.push('/');
    return <div></div>;
  }

  return (
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
        <Navbar />
        <Container>
          <div className={classes.checkout}>
            <CheckoutDetails />
            <CheckoutContact />
            <CheckoutOrder />
            <CheckoutPayment />
          </div>
        </Container>
      </main>
      <InfoModal />
    </PageContainer>
  );
};

export default Checkout;
