import Document, { Head, Html, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="ko" id="seung-ju">
        <Head>
          <meta charSet="utf-8" />
          <title>Seung Ju | Admin</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="Seung Ju | Admin" />
          <meta property="og:title" content="Seung Ju | Admin" />
          <meta property="og:description" content="Seung Ju | Admin" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://seung-ju.com" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosanskr.css" />
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,100,700" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
