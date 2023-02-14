import { worker } from 'mocks/browser';
import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    await worker.start();
  })();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
