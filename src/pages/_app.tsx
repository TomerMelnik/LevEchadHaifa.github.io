import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} as ComponentType />
);

export default MyApp;
