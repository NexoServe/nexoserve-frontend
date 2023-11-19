import Head from 'next/head';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Image1 from '../../assets/madison_1.jpeg';
import Image10 from '../../assets/madison_10.jpg';
import Image11 from '../../assets/madison_11.jpg';
import Image12 from '../../assets/madison_12.jpg';
import Image13 from '../../assets/madison_13.jpg';
import Image14 from '../../assets/madison_14.jpg';
import Image15 from '../../assets/madison_15.jpg';
import Image16 from '../../assets/madison_16.jpg';
import Image17 from '../../assets/madison_17.jpg';
import Image18 from '../../assets/madison_18.jpg';
import Image19 from '../../assets/madison_19.jpg';
import Image2 from '../../assets/madison_2.jpeg';
import Image20 from '../../assets/madison_20.jpg';
import Image21 from '../../assets/madison_21.jpg';
import Image23 from '../../assets/madison_23.jpeg';
import Image24 from '../../assets/madison_24.jpeg';
import Image25 from '../../assets/madison_25.jpeg';
import Image26 from '../../assets/madison_26.jpeg';
import Image27 from '../../assets/madison_27.jpeg';
import Image3 from '../../assets/madison_3.jpg';
import Image4 from '../../assets/madison_4.jpg';
import Image5 from '../../assets/madison_5.jpg';
import Image6 from '../../assets/madison_6.jpg';
import Image7 from '../../assets/madison_7.jpg';
import Image8 from '../../assets/madison_8.jpg';
import Image9 from '../../assets/madison_9.jpg';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import useStyles from './css';

const Gallery = () => {
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.galleryHero}>
          <h1 className={styles.galleryHeroTitle}>Gallery</h1>
        </div>
        <Container>
          <div className={styles.galleryContainer}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}
            >
              <Masonry>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image1}
                    className={styles.galleryImage}
                    alt="Madison Gallery 1"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image3}
                    className={styles.galleryImage}
                    alt="Madison Gallery 3"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image2}
                    className={styles.galleryImage}
                    alt="Madison Gallery 2"
                  />
                </div>

                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image4}
                    className={styles.galleryImage}
                    alt="Madison Gallery 4"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image5}
                    className={styles.galleryImage}
                    alt="Madison Gallery 5"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image6}
                    className={styles.galleryImage}
                    alt="Madison Gallery 6"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image7}
                    className={styles.galleryImage}
                    alt="Madison Gallery 7"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image8}
                    className={styles.galleryImage}
                    alt="Madison Gallery 8"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image9}
                    className={styles.galleryImage}
                    alt="Madison Gallery 9"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image10}
                    className={styles.galleryImage}
                    alt="Madison Gallery 10"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image11}
                    className={styles.galleryImage}
                    alt="Madison Gallery 11"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image12}
                    className={styles.galleryImage}
                    alt="Madison Gallery 12"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image13}
                    className={styles.galleryImage}
                    alt="Madison Gallery 13"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image14}
                    className={styles.galleryImage}
                    alt="Madison Gallery 14"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image15}
                    className={styles.galleryImage}
                    alt="Madison Gallery 15"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image16}
                    className={styles.galleryImage}
                    alt="Madison Gallery 16"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image17}
                    className={styles.galleryImage}
                    alt="Madison Gallery 17"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image18}
                    className={styles.galleryImage}
                    alt="Madison Gallery 18"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image19}
                    className={styles.galleryImage}
                    alt="Madison Gallery 19"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image20}
                    className={styles.galleryImage}
                    alt="Madison Gallery 20"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image21}
                    className={styles.galleryImage}
                    alt="Madison Gallery 21"
                  />
                </div>
                {/* <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image22}
                    className={styles.galleryImage}
                    alt="Madison Gallery 22"
                  />
                </div> */}
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image23}
                    className={styles.galleryImage}
                    alt="Madison Gallery 23"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image24}
                    className={styles.galleryImage}
                    alt="Madison Gallery 24"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image25}
                    className={styles.galleryImage}
                    alt="Madison Gallery 25"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image26}
                    className={styles.galleryImage}
                    alt="Madison Gallery 26"
                  />
                </div>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image27}
                    className={styles.galleryImage}
                    alt="Madison Gallery 27"
                  />
                </div>
                {/* <div className={styles.galleryImageWrapper}>
                  <Image
                    src={Image28}
                    className={styles.galleryImage}
                    alt="Madison Gallery 28"
                  />
                </div> */}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Gallery;
