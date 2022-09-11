import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { theme } from 'theme';
import './global.css';
import { Breakpoint, BreakpointProvider } from 'react-socks';

export default function MyApp(props: AppProps) {
  const {
    Component,
    pageProps: { ...pageProps },
  } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    document.body.style.fontSize = '14px';

    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const cache = createCache({
    key: 'css',
    prepend: true,
  });
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <StyledEngineProvider injectFirst>
      <BreakpointProvider>
      <CacheProvider value={cache}>
        <Head>
          <title>sharetrip</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        </CacheProvider>
        </BreakpointProvider>
    </StyledEngineProvider>
  );
}
