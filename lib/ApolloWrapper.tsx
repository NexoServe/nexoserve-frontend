'use client';

import { HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(';').shift();
  return null; // Return null if the cookie by the given name is not found
}

let graphqlUri: string;
let graphqlWsUri: string;

type Environment = 'development' | 'production' | 'staging';

const env: Environment = process.env.NEXT_PUBLIC_NODE_ENV as Environment;

if (env === 'development') {
  graphqlUri = 'http://localhost:4000/graphql'; // Development URI
  graphqlWsUri = 'ws://localhost:4000/graphql'; // Development URI
} else if (env === 'staging') {
  graphqlUri = 'https://staging-nexoserve-backend.up.railway.app/graphql'; // Staging URI
  graphqlWsUri = 'wss://staging-nexoserve-backend.up.railway.app/graphql'; // Staging URI
} else if (env === 'production') {
  graphqlUri = 'https://nexoserve-backend.up.railway.app/graphql';
  graphqlWsUri = 'wss://nexoserve-backend.up.railway.app/graphql'; // Default to Production URI
}

export function makeClient(): ApolloClient<unknown> {
  let wsLink;

  if (typeof window !== 'undefined') {
    // Using the getCookie function to retrieve the __session cookie value

    // Check if the __session cookie is not null, then proceed with the WebSocket link setup
    const { GraphQLWsLink } = require('@apollo/client/link/subscriptions');
    const { createClient } = require('graphql-ws');

    const sessionCookie = getCookie('__session');

    wsLink = new GraphQLWsLink(
      createClient({
        url: graphqlWsUri,
        connectionParams: {
          accessToken: sessionCookie,
        },
      }),
    );
  }

  const httpLink = new HttpLink({
    uri: graphqlUri,
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink || httpLink, // If wsLink is not initialized (on the server), use httpLink
    httpLink,
  );

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });
}

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
