import Head from 'next/head';
import { useRouter } from 'next/router';

import { RestaurantDetailsQuery } from '../../../generated/graphql';

const Seo = ({ restaurantDetails }: RestaurantDetailsQuery) => {
  const router = useRouter();

  return (
    <Head>
      <link rel="shortcut icon" href={restaurantDetails.favicon} />
      <title>{restaurantDetails.name}</title>
      <link
        rel="canonical"
        href={`${restaurantDetails.domainUrl}${router.asPath}`}
      />
      <meta name="description" content={restaurantDetails.metaDescription} />
      {/* <meta name="keywords" content={restaurantDetails.keywords} /> */}
      <meta name="author" content="nexoserve.com" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta property="og:title" content={restaurantDetails.name} />
      <meta
        property="og:description"
        content={restaurantDetails.metaDescription}
      />
      <meta property="og:image" content={restaurantDetails.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={restaurantDetails.name} />
      <meta
        property="og:description"
        content={restaurantDetails.metaDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={restaurantDetails.name} />
      <meta
        name="twitter:description"
        content={restaurantDetails.metaDescription}
      />
      <meta name="twitter:image" content={restaurantDetails.ogImage} />
    </Head>
  );
};

export default Seo;
