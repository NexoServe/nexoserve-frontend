import Image from 'next/image';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';

import { RestaurantDetailsOutput } from '../../generated/graphql';
import PizzaIcon from '../assets/pizza_icon.png';
import SaladIcon from '../assets/salad_icon.png';
import SubIcon from '../assets/sub_icon.png';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SvgIcons from '../components/SvgIcons';
import scrollLottie from '../lottie/scroll.json';

import useStyles from './index/css';

// const GET_RESTAURANT_DETAILS_QUERY = gql`
//   query RestaurantDetails($restaurantId: String!) {
//     restaurantDetails(restaurantId: $restaurantId) {
//       name
//       logo
//     }
//   }
// `;

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   const { data } = await apolloClient.query({
//     query: GET_RESTAURANT_DETAILS_QUERY,
//     variables: {
//       restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
//     },
//   });

//   return {
//     props: {
//       restaurantDetails: data,
//     },
//     revalidate: 10, // Optionally, ISR (Incremental Static Regeneration) timeout in seconds
//   };
// }

const Home = (props: RestaurantDetailsOutput) => {
  const styles = useStyles();
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className={styles.homeHeroContainer}>
        <div className={styles.homeHero}>
          <h1 className={styles.homeHeroTitle}>Are you Hungry?</h1>
          <div className={styles.homeHeroDescription}>
            Order now on our official website for original prices with no extra
            fees.
          </div>
          <div className={styles.homeHeroButtonContainer}>
            <Button
              onClick={() => router.push('/order')}
              styleClass={styles.homeHeroButton}
            >
              Order Now
            </Button>
          </div>
          <div className={styles.homeHeroSocials}>
            <a
              className={styles.homeHeroSocial}
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FAlbanyMadisons"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcons name="x" />
            </a>
            <a
              href="https://www.facebook.com/AlbanyMadisonsPizza/"
              target="_blank"
              rel="noreferrer"
              className={styles.homeHeroSocial}
            >
              <SvgIcons name="facebook" />
            </a>
            <a
              href="https://www.instagram.com/albanymadisonspizza/"
              target="_blank"
              rel="noreferrer"
              className={styles.homeHeroSocial}
            >
              <SvgIcons name="instagram" />
            </a>
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
          <div className={styles.featureWrapper}>
            <Image
              src={PizzaIcon}
              loading="lazy"
              alt="salad icon"
              width={120}
              height={120}
            />
            <h2 className={styles.featureTitle}>Gourmet Pizzas</h2>
            <p className={styles.featureMessage}>
              All of our pizza dough is made fresh daily. We import grain from
              the Mediterranean to unify our prestige flavor and ensure a
              satisfying taste.
            </p>
          </div>
          <div className={styles.featureWrapper}>
            <div className="vertical-line"></div>
            <Image
              src={SubIcon}
              loading="lazy"
              alt="leaf icon"
              width={120}
              height={120}
            />
            <h2 className={styles.featureTitle}>Delicious Subs</h2>
            <p className={styles.featureMessage}>
              Accompanied by your Choice of Trimmings: Lettuce, Tomatoes,
              Onions, Black Olives, Pickles, Hot Peppers, Provolone or American
              Cheese.
            </p>
          </div>
          <div className={styles.featureWrapper}>
            <div className="vertical-line"></div>
            <Image
              src={SaladIcon}
              loading="lazy"
              alt="truck icon"
              className="feature-image"
              width={120}
              height={120}
            />
            <h2 className={styles.featureTitle}>Fresh Salads</h2>
            <p className={styles.featureMessage}>
              We use the freshest ingredients in our salads in order to serve
              you the restaurant quality salads.
            </p>
          </div>
        </div>
      </Container>

      <div className={styles.aboutUs}>
        <Container>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.aboutUsContent}>
              <h2 className={styles.aboutUsTitle}>About Us</h2>
              <p className={styles.aboutUsMessage}>
                We at LaBella Pizza & Pasta would like to thank you for your
                support and patronage. We only use the best cheese and fresh
                dough made on the premises daily. For our sauce, we use only the
                freshest, whole plum tomatoes and the best spices available. We
                work hard to meet your needs & your wants.
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
              ></div>
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
              ></div>
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
              ></div>
              <div
                data-w-id="Div Block 16"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
                className={styles.largeImage2}
              ></div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
