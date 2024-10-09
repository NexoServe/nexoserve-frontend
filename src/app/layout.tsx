import React from 'react';

import gql from 'graphql-tag';
import { Montserrat_Alternates } from 'next/font/google';

import { RestaurantDetailsOutput } from '../../generated/graphql';
import apolloClientServer from '../../lib/ApolloClientServer';
import { ApolloWrapper } from '../../lib/ApolloWrapper';
import RecoilWrapper from '../../lib/RecoilWrapper';
import './global.css';

const GET_RESTAURANT_THEME = gql`
  query RestaurantDetails($restaurantId: String!) {
    restaurantDetails(restaurantId: $restaurantId) {
      theme {
        accent
        neutral
        primary
        secondary
        tertiary
      }
    }
  }
`;

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, error } = await apolloClientServer.query<{
    restaurantDetails: RestaurantDetailsOutput;
  }>({
    query: GET_RESTAURANT_THEME,
    variables: {
      restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
    },
  });

  console.log('error', error);
  console.log('data', data);

  const styles = {
    '--color-primary': data?.restaurantDetails?.theme?.primary,
    '--color-secondary': data?.restaurantDetails?.theme?.secondary,
    '--color-accent': data?.restaurantDetails?.theme?.accent,
    '--color-neutral': data?.restaurantDetails?.theme?.neutral,
    '--color-tertiary': data?.restaurantDetails?.theme?.tertiary,
  } as React.CSSProperties; // Casting to allow custom CSS properties

  return (
    <html lang="en">
      <body
        style={styles} // Using the styles with type casting
        className={montserrat.className}
      >
        <ApolloWrapper>
          <RecoilWrapper>
            <div id="Root">{children}</div>
          </RecoilWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
