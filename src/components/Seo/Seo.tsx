import Head from 'next/head';
import { usePathname } from 'next/navigation';

import { RestaurantDetailsQuery } from '../../../generated/graphql';

const Seo = ({ restaurantDetails }: RestaurantDetailsQuery) => {
  const pathname = usePathname();
  const fullUrl = `${restaurantDetails.domainUrl}${pathname}`;

  return (
    <Head>
      <link
        rel="shortcut icon"
        href={restaurantDetails.favicon}
        type="image/x-icon"
      />
      <link rel="icon" href={restaurantDetails.favicon} type="image/png" />

      <title>{restaurantDetails.name}</title>
      <link rel="canonical" href={fullUrl} />
      <meta name="description" content={restaurantDetails.metaDescription} />
      <meta name="author" content="nexoserve.com" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      <meta property="og:title" content={restaurantDetails.name} />
      <meta
        property="og:description"
        content={restaurantDetails.metaDescription}
      />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={restaurantDetails.ogImage} />
      <meta property="og:image:width" content="1900" />
      <meta property="og:image:height" content="1300" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={restaurantDetails.name} />
      <meta
        name="twitter:description"
        content={restaurantDetails.metaDescription}
      />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:image" content={restaurantDetails.ogImage} />
    </Head>
  );
};

export default Seo;
