import { useEffect, useState } from 'react';

import { ApolloProvider } from '@apollo/client';
import 'focus-visible';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import useStyles from '../../css/app';
import { useApollo } from '../../lib/apolloClient';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('webfontloader').then((WebFont) => {
        WebFont.load({
          google: {
            families: ['Montserrat'],
          },
          active: () => {
            setFontsLoaded(true);
          },
        });
      });
    }
  }, []);

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
      <RecoilRoot>
        <div className={classes.app}>
          {fontsLoaded ? <Component {...pageProps} /> : null}
        </div>
      </RecoilRoot>
    </ApolloProvider>
  );
}
