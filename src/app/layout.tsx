'use client';

import React from 'react';

import { Montserrat } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

import { ApolloWrapper } from '../../lib/ApolloWrapper';
import RecoilWrapper from '../../lib/RecoilWrapper';
import './global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <ApolloWrapper>
          <RecoilWrapper>
            <NextAppDirEmotionCacheProvider options={{ key: 'tss' }}>
              {children}
            </NextAppDirEmotionCacheProvider>
          </RecoilWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
