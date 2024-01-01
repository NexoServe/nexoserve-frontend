import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import Lottie from 'react-lottie';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Seo from '../../components/Seo/Seo';
import * as paymentSuccess from '../../lottie/success.json';
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
  ReactGA.initialize([
    {
      trackingId: props.restaurantDetails.measurementId,
    },
  ]);

  const theme = props.restaurantDetails.theme;
  const styles = useStyles({
    theme,
  });
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: props.restaurantDetails.theme.neutral,
      }}
    >
      <Seo restaurantDetails={props.restaurantDetails} />

      <main>
        <Navbar
          logo={props.restaurantDetails.logo}
          restaurantName={props.restaurantDetails.name}
          theme={props.restaurantDetails.theme}
        />
        <Container>
          <div className={styles.confirmation}>
            <Lottie
              options={{
                animationData: paymentSuccess,
                autoplay: true,
                loop: false,
              }}
              width={'100%'}
              height={400}
              isClickToPauseDisabled={true}
            />

            <h1 className={styles.confirmationTitle}>
              Order Placed Successfully
            </h1>
            <div className={styles.confirmationContent}>
              You will receive a confirmation email shortly.
            </div>
            <Button
              styleClass={styles.confirmationButton}
              onClick={() => router.push('/order')}
              theme={props.restaurantDetails.theme}
            >
              Back to Order Page
            </Button>
          </div>
        </Container>
      </main>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
        theme={props.restaurantDetails.theme}
      />
    </div>
  );
};

export default Checkout;
