import gql from 'graphql-tag';
import { Metadata } from 'next';

import HomePage from '@/components/Pages/HomePage';

import { RestaurantDetailsOutput } from '../../generated/graphql';
import apolloClientServer from '../../lib/ApolloClientServer';

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
  const { data, error } = await apolloClientServer.query<{
    restaurantDetails: RestaurantDetailsOutput;
  }>({
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
    icons: {
      icon: data?.restaurantDetails.favicon || '/default-favicon.ico', // fallback to a default favicon if not found
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

  return <HomePage restaurantDetails={data.restaurantDetails} />;
};

export default Home;
