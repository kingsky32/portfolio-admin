import type { AppProps } from 'next/app';
import Head from 'next/head';
import '#styles/variables.css';
import '#styles/fonts.css';
import '#styles/reset.css';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Seung Ju | Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
