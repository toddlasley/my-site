import Layout from '@/components/layout';
import { AppProps } from 'next/app';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}
