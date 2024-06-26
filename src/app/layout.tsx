import type { Metadata } from 'next';
import '@/src/app/globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://synergy10.vercel.app/'),
  title: 'Synergy',
  description: 'codeit sprint part3 tenten',
  icons: {
    icon: '/icons/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: '/icons/logo.png',
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <Script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
          integrity='sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01'
          crossOrigin='anonymous'
          strategy='beforeInteractive'
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
