import Navbar from '@/components/layouts/Navbar';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={quicksand.className}>
        <Navbar />
        <Component {...pageProps} />;
      </div>
    </SessionProvider>
  );
}
