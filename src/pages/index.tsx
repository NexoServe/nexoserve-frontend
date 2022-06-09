import { gql, useMutation, useQuery } from '@apollo/client';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { addApolloState, initializeApollo } from 'lib/apolloClient';

const linksQuery = gql`
  {
    links {
      id
      title
      url
      imageUrl
    }
  }
`;
const createLinkMutation = gql`
  mutation CreateLink(
    $title: String!
    $url: String!
    $imageUrl: String!
    $category: String!
    $description: String!
  ) {
    createLink(
      title: $title
      url: $url
      imageUrl: $imageUrl
      category: $category
      description: $description
    ) {
      id
      title
      url
      imageUrl
    }
  }
`;

const Home: NextPage = () => {
  const { data } = useQuery(linksQuery, {
    notifyOnNetworkStatusChange: true,
  });

  const [createLink, { data1, loading, error }] = useMutation(
    createLinkMutation,
    {
      variables: {
        title: `hey`,
        url: `hey`,
        imageUrl: `hey`,
        category: `hey`,
        description: `hey`,
      },
      update(cache, { data }) {
        const { links } = cache.readQuery({
          query: linksQuery,
        });

        cache.writeQuery({
          query: linksQuery,
          data: {
            links: [...links, data.createLink],
          },
        });
      },
    },
  );

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
        <button onClick={() => createLink()}>Add</button>

        {data?.links.map((link, id) => (
          <h1 key={id}>{link?.title}</h1>
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  await apolloClient.query({ query: linksQuery });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
