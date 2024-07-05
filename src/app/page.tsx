import gql from 'graphql-tag';
import { Metadata } from 'next';

import apolloClientServer from '../../lib/ApolloClientServer';
import Hero from '../components/Heros/Hero/Hero';
import Navbar from '../components/Navbars/Navbar/Navbar';

const GET_RESTAURANT_DETAILS_APOLLO = gql`
  query RestaurantDetails($restaurantId: String!) {
    restaurantDetails(restaurantId: $restaurantId) {
      name
      logo
      favicon
      metaDescription
      ogImage
      measurementId
      domainUrl
      loader
      address
      email
      navbarType
      theme {
        accent
        neutral
        primary
        secondary
        tertiary
      }
      gallery {
        id
        url
      }
      openingHours {
        dayOfWeek
        time {
          opens_at
          closes_at
        }
      }
      phoneNumbers {
        id
        number
      }
      socialMedia {
        id
        xTwitterUrl
        facebookUrl
        instagramUrl
      }
      hero {
        id
        type
        title
        description
        background
        foreground
      }
      feature {
        id
        title
        type
        items {
          id
          image
          title
          description
        }
      }
      aboutUs {
        id
        type
        title
        description
        imageOne
        imageTwo
        imageThree
        imageFour
      }
    }
  }
`;

export async function generateMetadata(): Promise<Metadata> {
  const { data, error } = await apolloClientServer.query({
    query: GET_RESTAURANT_DETAILS_APOLLO,
    variables: {
      restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
    },
  });

  if (error) {
    const errorText = error.message;
    console.error('Network response was not ok:', errorText);
    throw new Error('Network response was not ok');
  }

  console.log('metadata', data);

  return {
    title: data?.restaurantDetails.name,
    description: data?.restaurantDetails.metaDescription,
    openGraph: {
      title: data?.restaurantDetails.name,
      description: data?.restaurantDetails.metaDescription,
      images: [
        {
          url: data?.restaurantDetails.ogImage,
        },
      ],
    },
  };
}

const Home = async () => {
  const { data } = await apolloClientServer.query({
    query: GET_RESTAURANT_DETAILS_APOLLO,
    variables: {
      restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
    },
  });

  console.log('data', data);

  // const theme = data.restaurantDetails.theme;

  return (
    <div
    // style={{
    //   backgroundColor: theme.neutral,
    // }}
    >
      {/* <Seo restaurantDetails={data.restaurantDetails} /> */}

      <Navbar
        logo={data.restaurantDetails.logo}
        restaurantName={data.restaurantDetails.name}
        theme={data.restaurantDetails.theme}
        type={data.restaurantDetails.navbarType}
        gallery={data.restaurantDetails.gallery}
      />

      <Hero
        theme={data.restaurantDetails.theme}
        socialMedia={data.restaurantDetails.socialMedia}
        hero={data.restaurantDetails.hero}
      />

      {/* <Features features={data.restaurantDetails.feature} theme={theme} /> */}

      {/* <About theme={theme} aboutUs={data.restaurantDetails.aboutUs} /> */}

      {/* <Footer
        openingHours={data.restaurantDetails.openingHours}
        phoneNumbers={data.restaurantDetails.phoneNumbers}
        restaurantName={data.restaurantDetails.name}
        theme={theme}
        email={data.restaurantDetails.email}
      /> */}
    </div>
  );
};

export default Home;
