'use client';
import { useEffect } from 'react';

import ReactGA from 'react-ga4';
import { useRecoilState } from 'recoil';

import { LoaderAtom } from '@/state/LoaderState';

import { RestaurantDetailsOutput } from '../../../generated/graphql';
import About from '../Abouts/Abouts/About';
import Features from '../Features/Feature/Features';
import Footer from '../Footer/Footer';
import Hero from '../Heros/Hero/Hero';
import Navbar from '../Navbars/Navbar/Navbar';
import Seo from '../Seo/Seo';

const HomePage = ({
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

  return (
    <div
      style={{
        backgroundColor: theme.neutral,
      }}
    >
      <Navbar
        logo={restaurantDetails.logo}
        restaurantName={restaurantDetails.name}
        theme={restaurantDetails.theme}
        type={restaurantDetails.navbarType}
        gallery={restaurantDetails.gallery}
      />

      <Seo restaurantDetails={restaurantDetails} />

      <Hero
        theme={theme}
        socialMedia={restaurantDetails.socialMedia}
        hero={restaurantDetails.hero}
      />

      <Features features={restaurantDetails.feature} theme={theme} />

      <About theme={theme} aboutUs={restaurantDetails.aboutUs} />

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

export default HomePage;
