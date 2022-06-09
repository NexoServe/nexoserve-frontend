import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useApollo } from '../../lib/apolloClient';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
