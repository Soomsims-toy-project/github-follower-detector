import '@/styles/globals.css';

import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { queryClient } from '@/apis/queryClient';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <Head>
            <meta name="description" content="[숨심스 토이프로젝트] 서진 대원 깃허브 맞팔 탐지기" />
            <title>깃허브 맞팔 탐지기</title>
            <link rel="icon" href="/github.svg" type="image/svg+xml" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
