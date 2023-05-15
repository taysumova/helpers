import type { AppProps } from 'next/app';
import Head from 'next/head';

import {
  QueryClient,
  Hydrate,
  QueryClientProvider,
} from '@core/hooks';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from '@styles/global';
import { baseTheme } from '@styles/theme';

import { ThemeProvider } from '@core/styled';

export default function App({ Component, pageProps }: AppProps) {
  // Create a client for react-query
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
        retryDelay: 0,
        cacheTime: Infinity,
        staleTime: Infinity, // 15 * 60 * 1000 15 минут
      },
    },
  });

  return (
    <>
      <Head>
        <title>Helpers</title>

        <meta
          id="vp"
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />

        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
              <NextNProgress
                color={baseTheme.colors.primary}
                options={{
                  showSpinner: false,
                }}
              />
              <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
