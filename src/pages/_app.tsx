import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import useStyles from '../../css/app';
import { useApollo } from '../../lib/apolloClient';

export default function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();

  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style?.parentNode?.removeChild(style);
    }
  }, []);

  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <div className={classes.app}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
