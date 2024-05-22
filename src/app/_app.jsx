import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ChakraProvider } from '@chakra-ui/react';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import InitialClientHandler from './providers';
import { repositoryName } from '../../prismicio';
import theme from '../../styles/theme';
import Navbar from '../common/components/Navbar';
import AuthProvider from '../common/context/AuthContext';
import SessionProvider from '../common/context/SessionContext';
import ConnectionProvider from '../common/context/ConnectionContext';
import Footer from '../common/components/Footer';
import Helmet from '../common/components/Helmet';
import InterceptionLoader from '../common/components/InterceptionLoader';

import '../../styles/globals.css';
import '../../styles/react-tags-input.css';
import '../../styles/markdown.css';
import '../../styles/phoneInput/index.css';
import '../../styles/datePicker.css';
import '../../styles/ipynb.css';

import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import '@fontsource-variable/space-grotesk';
import modifyEnv from '../../modifyEnv';
import AlertMessage from '../common/components/AlertMessage';

function InternalLinkComponent(props) {
  return <Link {...props} />;
}

function MyApp({ Component, pageProps }) {
  const BREATHECODE_HOST = modifyEnv({ queryString: 'host', env: process.env.BREATHECODE_HOST });
  const domainName = process.env.DOMAIN_NAME;
  const existsWhiteLabel = typeof domainName === 'string' && domainName !== 'https://4geeks.com';

  const pagePropsData = {
    ...pageProps,
    existsWhiteLabel,
  } || {};

  const isEnvModified = process.env.VERCEL_ENV !== 'production'
    && BREATHECODE_HOST !== process.env.BREATHECODE_HOST;

  // const queryClient = new QueryClient();

  return (
    // Listo 1
    <InitialClientHandler>
      <Helmet
        {...pageProps.seo}
      />
      {/* Listo 2 */}
      <ChakraProvider
        resetCSS
        theme={theme}
      >
        {/* Listo 3 */}
        <AuthProvider pageProps={pageProps}>
          {/* Listo 4 */}
          <SessionProvider>
            {/* Listo 5 */}
            <ConnectionProvider>
              {/* Listo 6 */}
              <Navbar pageProps={pageProps} translations={pageProps?.translations} />
              {isEnvModified && (
              // Listo 7
              <AlertMessage
                full
                type="warning"
                message={`You not on the test environment, you are on "${BREATHECODE_HOST}"`}
                borderRadius="0px"
                justifyContent="center"
              />
              )}
              {/* Listo 8 */}
              <InterceptionLoader />
              {/* Listo 9 */}
              <PrismicProvider internalLinkComponent={InternalLinkComponent}>
                <PrismicPreview repositoryName={repositoryName}>
                  <Component {...pagePropsData} />
                </PrismicPreview>
              </PrismicProvider>
              {/* Listo 10 */}
              <Footer pageProps={pagePropsData} />
            </ConnectionProvider>
          </SessionProvider>
        </AuthProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </InitialClientHandler>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
