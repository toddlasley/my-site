'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const links = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <head>
        <title>Todd Lasley</title>
        <script type='module' src='https://cdn.jsdelivr.net/npm/zero-md@3?register' async></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          {
            links.map((x) => {
              return (<Link key={x.label} href={x.href} className={`${pathname === x.href ? 'active' : ''}`}>{x.label}</Link>);
            })
          }
        </header>
        {children}
      </body>
    </html>
  );
}
