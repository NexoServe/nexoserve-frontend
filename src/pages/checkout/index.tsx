import Head from 'next/head';

import CheckoutContact from '../../components/Checkout/CheckoutContact/CheckoutContact';
import CheckoutDetails from '../../components/Checkout/CheckoutDetails/CheckoutDetails';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import Container from '../../components/Container/Container';
import Navbar from '../../components/Navbar/Navbar';
import PageContainer from '../../components/PageContainer/PageContainer';

import useStyles from './css';

const Checkout = () => {
  const classes = useStyles();

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
    </PageContainer>
  );
};

export default Checkout;
