import type { AppProps } from 'next/app';
import './globals.css';
import PageHead from '@/components/PageHead';
import { createContext } from 'react';
export const IsSsrMobileContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
        <Component {...pageProps} />
      </IsSsrMobileContext.Provider>
    </>
  );
}
