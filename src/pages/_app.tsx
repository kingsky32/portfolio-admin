import React from 'react';
import { setToken, TOKEN_STORE_KEY } from '#apis/index';
import handleError from '#utils/handleError';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import nProgress from 'nprogress';
import Layout from '#components/layout/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'nprogress/nprogress.css';
import '#styles/variables.css';
import '#styles/fonts.css';
import '#styles/reset.css';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import Provider from '#components/Provider';
import { Token } from '#apis/auth';
import { useProfile } from '#contexts/auth';
import { useCookies } from 'react-cookie';
import { PREV_PAGE } from '#commons/contants';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faUser, faLock, faSquare, faCheckSquare);

Router.events.on('routeChangeStart', () => {
  nProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  nProgress.done();
});
Router.events.on('routeChangeError', () => {
  nProgress.done();
});

const Root = React.memo(({ children }: React.HTMLAttributes<HTMLElement>): React.ReactElement | null => {
  const router = useRouter();
  const setCookie = useCookies()[1];
  const [mount, setMount] = React.useState(false);
  const { profile, setProfile } = useProfile();

  const init = React.useCallback(async () => {
    if (Boolean(window) === false) {
      return;
    }
    try {
      const token: string | null = window.localStorage.getItem(TOKEN_STORE_KEY);
      if (token) {
        const parsedToken: Token = JSON.parse(token);
        setToken(parsedToken);
        await setProfile();
      }
    } catch (error) {
      handleError(error);
    } finally {
      setMount(true);
    }
  }, []);

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    if (!mount) {
      return;
    }
    if (!profile && router.pathname !== '/login') {
      if (!['/_error'].includes(router.pathname)) {
        setCookie(PREV_PAGE, router.pathname);
      }
      router.replace('/login');
    }
  }, [mount, profile]);

  if (!mount) {
    return null;
  }

  return <>{children}</>;
});

const MyApp = function ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Provider>
      <Layout>
        <Head>
          <title>Admin | Seung Ju</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Root>
          <Component {...pageProps} />
        </Root>
      </Layout>
    </Provider>
  );
};

export default MyApp;
