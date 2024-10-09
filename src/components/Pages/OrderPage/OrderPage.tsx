'use client';

import { useEffect } from 'react';

import ReactGA from 'react-ga4';
import { useRecoilState } from 'recoil';

import Container from '@/components/Container/Container';
import FoodList from '@/components/Food/FoodList/FoodList';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbars/Navbar/Navbar';
import OrderNavbar from '@/components/OrderNavbar/OrderNavbar/OrderNavbar';
import PageContainer from '@/components/PageContainer/PageContainer';
import Seo from '@/components/Seo/Seo';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartButton from '@/components/ShoppingCart/ShoppingCartButton/ShoppingCartButton';
import ShoppingCartModal from '@/components/ShoppingCart/ShoppingCartModal/ShoppingCartModal';
import { LoaderAtom } from '@/state/LoaderState';

import { base } from '../../../../css/base';
import { RestaurantDetailsOutput } from '../../../../generated/graphql';

import useStyles from './css';

const OrderPage = ({
  restaurantDetails,
}: {
  restaurantDetails: RestaurantDetailsOutput;
}) => {
  const [, setLoader] = useRecoilState(LoaderAtom);

  useEffect(() => {
    setLoader(restaurantDetails.loader);
  }, []);

  ReactGA.initialize([
    {
      trackingId: restaurantDetails.measurementId,
    },
  ]);

  const theme = restaurantDetails.theme;
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
          <Seo restaurantDetails={restaurantDetails} />

          <main>
            <Navbar
              logo={restaurantDetails.logo}
              restaurantName={restaurantDetails.name}
              theme={restaurantDetails.theme}
              type={restaurantDetails.navbarType}
              gallery={restaurantDetails.gallery}
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
        openingHours={restaurantDetails.openingHours}
        phoneNumbers={restaurantDetails.phoneNumbers}
        restaurantName={restaurantDetails.name}
        theme={theme}
        email={restaurantDetails.email}
      />
    </div>
  );
};

export default OrderPage;
