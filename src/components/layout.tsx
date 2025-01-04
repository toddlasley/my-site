'use client';

import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { BLOG_PATH } from '../lib/constants/paths';
import { useRouter } from 'next/router';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const links = [
  { label: 'About', href: '/' },
  { label: 'Blog', href: BLOG_PATH }
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <>
      <Head>
        <title>Todd Lasley</title>
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div className='header-inner'>
            <h2>Todd Lasley</h2>
            <div>
              {
                links.map((x) => {
                  return (<Link key={x.label} href={x.href} className={`${router.asPath === x.href ? 'active' : ''}`}>{x.label}</Link>);
                })
              }
            </div>
          </div>
        </header>
        <div className='main-container'>
          {children}
        </div>
      </div>
    </>
  );
}
