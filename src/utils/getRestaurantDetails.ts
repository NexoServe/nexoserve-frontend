import gql from 'graphql-tag';

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
        title
        description
        background
        foreground
      }
      feature {
        id
        items {
          id
          image
          title
          description
        }
      }
      aboutUs {
        id
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

const getRestaurantDetails = async () => {
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
