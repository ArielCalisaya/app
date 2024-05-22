'use client';

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
// import AuthProvider from '../common/context/AuthContext';
import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from 'prismicio';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import modifyEnv from '../../modifyEnv';
import AuthProvider from '@/common/context/AuthContext';
import SessionProvider from '@/common/context/SessionContext';
import ConnectionProvider from '@/common/context/ConnectionContext';
import AlertMessage from '@/common/components/AlertMessage';

function InternalLinkComponent(props) {
  return <Link {...props} />;
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

const browserQueryClient = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) makeQueryClient();
  return browserQueryClient;
}

export default function Providers({ children }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  const BREATHECODE_HOST = modifyEnv({ queryString: 'host', env: process.env.BREATHECODE_HOST });
  const isEnvModified = process.env.VERCEL_ENV !== 'production'
  && BREATHECODE_HOST !== process.env.BREATHECODE_HOST;

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthProvider>
          <SessionProvider>
            <ConnectionProvider>
              <PrismicProvider internalLinkComponent={InternalLinkComponent}>
                <PrismicPreview repositoryName={repositoryName}>
                  {isEnvModified && (
                    <AlertMessage
                      full
                      type="warning"
                      message={`You not on the test environment, you are on "${BREATHECODE_HOST}"`}
                      borderRadius="0px"
                      justifyContent="center"
                    />
                  )}
                  {children}
                </PrismicPreview>
              </PrismicProvider>
            </ConnectionProvider>
          </SessionProvider>
        </AuthProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
