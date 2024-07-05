import { useEffect } from 'react';

import ReactGA from 'react-ga4';
import { useRecoilState } from 'recoil';

import { RestaurantDetailsQuery } from '../../generated/graphql';
import About from '../components/Abouts/Abouts/About';
import Features from '../components/Features/Feature/Features';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Heros/Hero/Hero';
import Navbar from '../components/Navbars/Navbar/Navbar';
import Seo from '../components/Seo/Seo';
import { LoaderAtom } from '../state/LoaderState';
import getRestaurantDetails from '../utils/getRestaurantDetails';

export async function getServerSideProps() {
  const data = await getRestaurantDetails();

  return {
    props: {
      ...data,
    },
  };
}

const Home = (props: RestaurantDetailsQuery) => {
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

  return (
    <div
      style={{
        backgroundColor: theme.neutral,
      }}
    >
      <Seo restaurantDetails={props.restaurantDetails} />

      <Navbar
        logo={props.restaurantDetails.logo}
        restaurantName={props.restaurantDetails.name}
        theme={theme}
        type={props.restaurantDetails.navbarType}
        gallery={props.restaurantDetails.gallery}
      />

      <Hero
        theme={theme}
        socialMedia={props.restaurantDetails.socialMedia}
        hero={props.restaurantDetails.hero}
      />

      <Features features={props.restaurantDetails.feature} theme={theme} />

      <About theme={theme} aboutUs={props.restaurantDetails.aboutUs} />

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

export default Home;
