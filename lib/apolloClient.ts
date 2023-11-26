import { useMemo } from 'react';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://restaurant-server-production-5304.up.railway.app/graphql', // Replace with your GraphQL server URL
    }),
    cache: new InMemoryCache(),
  });
}

interface InitializeApolloOptions {
  initialState?: NormalizedCacheObject;
}

export function initializeApollo(options: InitializeApolloOptions = {}) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state gets hydrated here
  if (options.initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...options.initialState });
  }

  // For SSG and SSR, always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

interface PageProps {
  props: {
    data?: NormalizedCacheObject;
  };
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: PageProps,
) {
  if (pageProps?.props) {
    pageProps.props.data = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: { data?: NormalizedCacheObject }) {
  const state = pageProps.data;
  const store = useMemo(
    () => initializeApollo({ initialState: state }),
    [state],
  );
  return store;
}
