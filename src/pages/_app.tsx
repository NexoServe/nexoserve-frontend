import { useEffect, useState } from 'react';

import { ApolloProvider } from '@apollo/client';
import 'focus-visible';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import useStyles from '../../css/app';
import colors from '../../css/colors';
import { useApollo } from '../../lib/apolloClient';
import { FacebookPixelEvents } from '../../lib/pixelEvents';
import Loader from '../components/Loader/Loader';
import { ModalPopUp } from '../components/Modal/Modal';

export default function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, []);

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

  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style?.parentNode?.removeChild(style);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('finished');
      setLoading(false);
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, []);

  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <FacebookPixelEvents />
        <div className={classes.app}>
          {loading ? (
            <ModalPopUp
              theme={colors}
              onClose={() => console.log()}
              showModal={loading}
            >
              <Loader />
            </ModalPopUp>
          ) : (
            <>{fontsLoaded ? <Component {...pageProps} /> : null}</>
          )}
        </div>
      </RecoilRoot>
    </ApolloProvider>
  );
}
