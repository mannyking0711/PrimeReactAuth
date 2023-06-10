import type {AppProps} from 'next/app'
import {Fragment, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import Layout from '../components/Layout';
import {LayoutProvider} from "../../layout/context/layoutcontext";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import '../../styles/layout/layout.scss';
import '../../styles/demo/Demos.scss';

export default function App({Component, pageProps, router}: AppProps) {

  const isLayoutHidden = [`/login`].includes(router.pathname);

  const LayoutComponent = isLayoutHidden ? Fragment : Layout;

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    }
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {/*<LayoutComponent>*/}
      <LayoutProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </LayoutProvider>
      {/*</LayoutComponent>*/}
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}
