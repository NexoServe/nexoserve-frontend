import { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { FormProvider, useForm } from 'react-hook-form';

import useStyles from '../../css/app';
import { useApollo } from '../../lib/apolloClient';

export default function MyApp({ Component, pageProps }: AppProps) {
  const methods = useForm();
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
      <FormProvider {...methods}>
        <div className={classes.app}>
          <Component {...pageProps} />
        </div>
      </FormProvider>
    </ApolloProvider>
  );
}
