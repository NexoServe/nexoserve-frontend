import { NextPage } from 'next';
import Head from 'next/head';

import { addApolloState, initializeApollo } from '../../../lib/apolloClient';
import Container from '../../components/Container/Container';
import FoodList from '../../components/Food/FoodList/FoodList';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import OrderNavbar from '../../components/OrderNavbar/OrderNavbar/OrderNavbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartButton from '../../components/ShoppingCart/ShoppingCartButton/ShoppingCartButton';
import ShoppingCartModal from '../../components/ShoppingCart/ShoppingCartModal/ShoppingCartModal';

import useStyles from './css';

const Order: NextPage = () => {
  const classes = useStyles();

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
      </PageContainer>
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  // TODO: add ssr
  // await apolloClient.query({ query: FoodsDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Order;
