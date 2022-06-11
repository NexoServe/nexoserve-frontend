import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {
  FoodsDocument,
  FoodsQuery,
  useFoodsQuery,
} from '../../generated/graphql';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';
import prisma from '../../lib/prisma';

const Home: NextPage = () => {
  const { data } = useFoodsQuery({
    notifyOnNetworkStatusChange: true,
  });

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

  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <button onClick={() => createLink()}>Add</button> */}

        {data?.foods.map((food) => (
          <h1 key={food?.id}>{food?.name}</h1>
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  await apolloClient.query({ query: FoodsDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
