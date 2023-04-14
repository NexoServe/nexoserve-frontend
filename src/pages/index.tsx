import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { addApolloState, initializeApollo } from '../../lib/apolloClient';
import prisma from '../../lib/prisma';
import Container from '../components/Container/Container';
import FoodList from '../components/Food/FoodList/FoodList';
import Navbar from '../components/Navbar/Navbar';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart/ShoppingCart';
import ShoppingCartButton from '../components/ShoppingCart/ShoppingCartButton/ShoppingCartButton';
import ShoppingCartModal from '../components/ShoppingCart/ShoppingCartModal/ShoppingCartModal';

import useStyles from './index/css';

const Home: NextPage = () => {
  const classes = useStyles();

  // const { data } = useFoodsQuery({
  //   notifyOnNetworkStatusChange: true,
  // });

  // const [createLink, {}] = useCreateLinkMutation({
  //   variables: {
  //     title: `hey`,
  //     url: `hey`,
  //     imageUrl: `hey`,
  //     category: `hey`,
  //     description: `hey`,
  //   },
  //   update(cache, { data }) {
  //     const { links }: any = cache.readQuery({
  //       query: LinksDocument,
  //     });

  //     cache.writeQuery({
  //       query: LinksDocument,
  //       data: {
  //         links: [...links, data?.createLink],
  //       },
  //     });
  //   },
  // });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
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
          <div
            style={{
              height: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <button
              style={{ height: '100%' }}
              onClick={() => setIsChecked(!isChecked)}
            >
              click
            </button>
            <AnimatePresence>
              {isChecked && (
                <motion.svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isChecked ? 1 : 0 }}
                    exit={{ pathLength: 0 }}
                    d="M3.5 9.5L8 14L21 1"
                    stroke="green"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

          <div className={classes.indexConatiner}>
            <FoodList />
            <ShoppingCart styleClass={classes.indexShoppingCartDesktop} />
            <ShoppingCartModal />
            <ShoppingCartButton />
          </div>
        </Container>
      </main>
    </div>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  //TODO: add ssr
  // await apolloClient.query({ query: FoodsDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
