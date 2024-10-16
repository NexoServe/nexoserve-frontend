import { useEffect } from 'react';

import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import { useRecoilState } from 'recoil';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import CheckoutContact from '../../components/Checkout/CheckoutContact/CheckoutContact';
import CheckoutDetails from '../../components/Checkout/CheckoutDetails/CheckoutDetails';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbars/Navbar/Navbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import Seo from '../../components/Seo/Seo';
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

const Checkout = (props: RestaurantDetailsQuery) => {
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
  const router = useRouter();

  const shoppingCartStorage = localStorage.getItem('shoppingCartItems');
  const orderTimeStorage = localStorage.getItem('orderTime');

  useEffect(() => {
    if (!shoppingCartStorage || !orderTimeStorage) {
      router.push('/');
    }
  }, [shoppingCartStorage, orderTimeStorage]);

  return (
    <div
      style={{
        backgroundColor: theme.neutral,
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
            gallery={props.restaurantDetails.gallery}
          />
          <Container>
            <div className={classes.checkout}>
              <CheckoutDetails theme={theme} />
              <CheckoutContact theme={theme} />
              <CheckoutOrder theme={theme} />
              <CheckoutPayment theme={theme} />
            </div>
          </Container>
        </main>
      </PageContainer>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
        theme={props.restaurantDetails.theme}
        email={props.restaurantDetails.email}
      />
    </div>
  );
};

export default Checkout;
