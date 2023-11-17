import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';

import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import * as paymentSuccess from '../../lottie/success.json';

import useStyles from './css';

const Order: NextPage = () => {
  const styles = useStyles();
  const router = useRouter();

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
            >
              Back to Order Page
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Order;
