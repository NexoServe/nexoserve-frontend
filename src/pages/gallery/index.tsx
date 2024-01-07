import { useEffect } from 'react';

import Image from 'next/image';
import ReactGA from 'react-ga4';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useRecoilState } from 'recoil';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbars/Navbar/Navbar';
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

const Gallery = (props: RestaurantDetailsQuery) => {
  const [, setLoader] = useRecoilState(LoaderAtom);

  useEffect(() => {
    setLoader(props.restaurantDetails.loader);
  }, []);

  ReactGA.initialize([
    {
      trackingId: props.restaurantDetails.measurementId,
    },
  ]);

  const styles = useStyles();

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
          type={props.restaurantDetails.navbarType}
        />
        <div className={styles.galleryHero}>
          <h1 className={styles.galleryHeroTitle}>Gallery</h1>
        </div>
        <Container>
          <div className={styles.galleryContainer}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}
            >
              <Masonry>
                {props.restaurantDetails.gallery?.map((image) => (
                  <div key={image?.id} className={styles.galleryImageWrapper}>
                    <Image
                      src={image?.url as string}
                      className={styles.galleryImage}
                      alt="1"
                      width={200}
                      height={200}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </Container>
        <Footer
          openingHours={props.restaurantDetails.openingHours}
          phoneNumbers={props.restaurantDetails.phoneNumbers}
          restaurantName={props.restaurantDetails.name}
          theme={props.restaurantDetails.theme}
        />
      </main>
    </div>
  );
};

export default Gallery;
