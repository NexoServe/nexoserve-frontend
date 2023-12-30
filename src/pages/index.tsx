import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';

import { RestaurantDetailsQuery } from '../../generated/graphql';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SvgIcons from '../components/SvgIcons';
import scrollLottie from '../lottie/scroll.json';
import getRestaurantDetails from '../utils/getRestaurantDetails';

import useStyles from './index/css';

export async function getServerSideProps() {
  const data = await getRestaurantDetails();

  return {
    props: {
      ...data,
    },
  };
}

const Home = (props: RestaurantDetailsQuery) => {
  const styles = useStyles({
    theme: props.restaurantDetails.theme,
  });
  const router = useRouter();
  const theme = props.restaurantDetails.theme;

  console.log(
    'props.restaurantDetails.favicon',
    props.restaurantDetails.favicon,
  );

  return (
    <div
      style={{
        backgroundColor: theme.neutral,
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
      <Navbar
        logo={props.restaurantDetails.logo}
        restaurantName={props.restaurantDetails.name}
        theme={theme}
      />
      <div className={styles.homeHeroContainer}>
        <Image
          alt="1"
          fill
          src={props.restaurantDetails.hero?.background as string}
          objectFit="cover"
        />
        <Image
          alt="1"
          src={props.restaurantDetails.hero?.foreground as string}
          objectFit="cover"
          fill
          style={{
            objectPosition: '40%',
          }}
        />
        <div className={styles.homeHero}>
          <h1 className={styles.homeHeroTitle}>
            {props.restaurantDetails.hero?.title}
          </h1>
          <div className={styles.homeHeroDescription}>
            {props.restaurantDetails.hero?.description}
          </div>
          <div className={styles.homeHeroButtonContainer}>
            <Button
              onClick={() => router.push('/order')}
              styleClass={styles.homeHeroButton}
              theme={theme}
            >
              Order Now
            </Button>
          </div>
          <div className={styles.homeHeroSocials}>
            {props.restaurantDetails.socialMedia?.xTwitterUrl && (
              <a
                className={styles.homeHeroSocial}
                href={props.restaurantDetails.socialMedia?.xTwitterUrl}
                target="_blank"
                rel="noreferrer"
              >
                <SvgIcons name="x" fill={theme.primary} />
              </a>
            )}

            {props.restaurantDetails.socialMedia?.facebookUrl && (
              <a
                href={props.restaurantDetails.socialMedia?.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.homeHeroSocial}
              >
                <SvgIcons name="facebook" fill={theme.primary} />
              </a>
            )}

            {props.restaurantDetails.socialMedia?.instagramUrl && (
              <a
                href={props.restaurantDetails.socialMedia?.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.homeHeroSocial}
              >
                <SvgIcons name="instagram" fill={theme.primary} />
              </a>
            )}
          </div>
          <div className={styles.homeHeroScroll}>
            <Lottie
              options={{
                animationData: scrollLottie,
                autoplay: true,
                loop: true,
              }}
              height={50}
            />
          </div>
        </div>
      </div>

      <Container styleClass={styles.features}>
        <div
          style={{
            opacity: 1,
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
          className={styles.featuresWrapper}
        >
          {props.restaurantDetails?.feature?.items?.map((featureItem) => (
            <div key={featureItem?.id} className={styles.featureWrapper}>
              <Image
                src={featureItem?.image as string}
                loading="lazy"
                alt="salad icon"
                width={120}
                height={120}
              />
              <h2 className={styles.featureTitle}>{featureItem?.title}</h2>
              <p className={styles.featureMessage}>
                {featureItem?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className={styles.aboutUs}>
        <Container>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.aboutUsContent}>
              <h2 className={styles.aboutUsTitle}>
                {props.restaurantDetails.aboutUs?.title}
              </h2>
              <p className={styles.aboutUsMessage}>
                {props.restaurantDetails.aboutUs?.description}
              </p>
            </div>

            <div className={styles.imageGrid}>
              <div
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
                className={styles.largeImage1}
              >
                <Image
                  src={props.restaurantDetails.aboutUs?.imageOne as string}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  alt="salad icon"
                  width={500}
                  height={500}
                />
              </div>
              <div
                id="w-node-div-block-15-085088a6"
                data-w-id="Div Block 15"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
                className={styles.smallImage1}
              >
                <Image
                  src={props.restaurantDetails.aboutUs?.imageTwo as string}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                  alt="salad icon"
                  width={500}
                  height={500}
                />
              </div>
              <div
                id="w-node-div-block-17-085088a6"
                data-w-id="Div Block 17"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
                className={styles.smallImage2}
              >
                <Image
                  src={props.restaurantDetails.aboutUs?.imageThree as string}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                  alt="salad icon"
                  width={500}
                  height={500}
                />
              </div>
              <div
                data-w-id="Div Block 16"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
                className={styles.largeImage2}
              >
                <Image
                  src={props.restaurantDetails.aboutUs?.imageFour as string}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                  alt="salad icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
        theme={theme}
      />
    </div>
  );
};

export default Home;
