import gql from 'graphql-tag';

import { RestaurantDetailsOutput } from '../../generated/graphql';
import { initializeApollo } from '../../lib/apolloClient';

const GET_RESTAURANT_DETAILS_QUERY = gql`
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
      phoneNumbers {
        id
        number
      }
      openingHours {
        dayOfWeek
        time {
          opens_at
          closes_at
        }
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

const getRestaurantDetails = async (): Promise<{
  restaurantDetails: RestaurantDetailsOutput;
}> => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_RESTAURANT_DETAILS_QUERY,
    variables: {
      restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
    },
  });

  return data;
};

export default getRestaurantDetails;
