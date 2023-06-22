import { Metadata } from 'next';
import './globals.css';
import { Sora } from 'next/font/google';
import { IsSsrMobileContext } from '@/lib/clientUtils';
import { getIsMobileSSR } from '@/lib/ssrUtils';

const inter = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abax',
  description: 'Lending Protocol',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const isMobileSSR = await getIsMobileSSR();
  return (
    <html lang="en">
      <body className={inter.className}>
        <IsSsrMobileContext.Provider value={isMobileSSR}>{children}</IsSsrMobileContext.Provider>
      </body>
    </html>
  );
}
