import Head from 'next/head';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import Container from '../../components/Container/Container';
import FoodList from '../../components/Food/FoodList/FoodList';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import OrderNavbar from '../../components/OrderNavbar/OrderNavbar/OrderNavbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartButton from '../../components/ShoppingCart/ShoppingCartButton/ShoppingCartButton';
import ShoppingCartModal from '../../components/ShoppingCart/ShoppingCartModal/ShoppingCartModal';
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

const Order = (props: RestaurantDetailsQuery) => {
  const classes = useStyles();

  console.log('props', props);

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
        }}
      >
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
      </div>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
      />
    </>
  );
};

export default Order;
