import '@/styles/globals.css';

import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import { queryClient } from '@/apis/queryClient';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
