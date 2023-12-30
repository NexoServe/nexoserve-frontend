import Head from 'next/head';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
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
  const styles = useStyles();

  return (
    <div
      style={{
        backgroundColor: props.restaurantDetails.theme.neutral,
      }}
    >
      <Head>
        <link rel="shortcut icon" href={props.restaurantDetails.favicon} />
        <title>{props.restaurantDetails.name}</title>
        <meta
          name="description"
          content={props.restaurantDetails.metaDescription}
        />
        {/* <meta name="keywords" content={props.restaurantDetails.keywords} /> */}
        <meta name="author" content="nexoserve.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta property="og:title" content={props.restaurantDetails.name} />
        <meta
          property="og:description"
          content={props.restaurantDetails.metaDescription}
        />
        <meta property="og:image" content={props.restaurantDetails.ogImage} />
      </Head>
      <main>
        <Navbar
          logo={props.restaurantDetails.logo}
          restaurantName={props.restaurantDetails.name}
          theme={props.restaurantDetails.theme}
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
