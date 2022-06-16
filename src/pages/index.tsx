import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { useFoodsQuery } from '../../generated/graphql';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';
import prisma from '../../lib/prisma';
import FoodList from '../components/FoodList/FoodList';

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
        <FoodList foods={data?.foods} />
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
