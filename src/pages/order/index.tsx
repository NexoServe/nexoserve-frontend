import { useEffect } from 'react';

import ReactGA from 'react-ga4';
import { useRecoilState } from 'recoil';

import { base } from '../../../css/base';
import { RestaurantDetailsQuery } from '../../../generated/graphql';
import Container from '../../components/Container/Container';
import FoodList from '../../components/Food/FoodList/FoodList';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbars/Navbar/Navbar';
import OrderNavbar from '../../components/OrderNavbar/OrderNavbar/OrderNavbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import Seo from '../../components/Seo/Seo';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartButton from '../../components/ShoppingCart/ShoppingCartButton/ShoppingCartButton';
import ShoppingCartModal from '../../components/ShoppingCart/ShoppingCartModal/ShoppingCartModal';
import { LoaderAtom } from '../../state/LoaderState';
import getRestaurantDetails from '../../utils/getRestaurantDetails';

import useStyles from './css';

export async function getServerSideProps() {
  const data = await getRestaurantDetails();

  return {
    props: {
      ...data,
    },
  };
}

const Order = (props: RestaurantDetailsQuery) => {
  const [, setLoader] = useRecoilState(LoaderAtom);

  useEffect(() => {
    setLoader(props.restaurantDetails.loader);
  }, []);

  ReactGA.initialize([
    {
      trackingId: props.restaurantDetails.measurementId,
    },
  ]);

  const theme = props.restaurantDetails.theme;
  const classes = useStyles({
    theme,
  });

  return (
    <div
      style={{
        backgroundColor: theme.neutral,
      }}
    >
      <div
        style={{
          minHeight: '100vh',
          paddingBottom: base(5),
        }}
      >
        <PageContainer theme={theme}>
          <Seo restaurantDetails={props.restaurantDetails} />

          <main>
            <Navbar
              logo={props.restaurantDetails.logo}
              restaurantName={props.restaurantDetails.name}
              theme={props.restaurantDetails.theme}
              type={props.restaurantDetails.navbarType}
            />
            <OrderNavbar theme={theme} />
            <Container>
              <div className={classes.indexContainer}>
                <FoodList theme={theme} />
                <ShoppingCart
                  theme={theme}
                  styleClass={classes.indexShoppingCartDesktop}
                />
                <ShoppingCartModal theme={theme} />
                <ShoppingCartButton theme={theme} />
              </div>
            </Container>
          </main>
        </PageContainer>
      </div>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
        theme={theme}
        email={props.restaurantDetails.email}
      />
    </div>
  );
};

export default Order;
