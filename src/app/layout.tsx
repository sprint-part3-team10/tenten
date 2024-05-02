import type { Metadata } from 'next';
import '@/src/app/globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Synergy',
  description: 'codeit sprint part3 tenten',
  icons: {
    icon: '/icons/favicon.ico',
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
        <Script id='kakaoSdk' strategy='beforeInteractive'>
          {`Kakao.init('505485f61e7d680972459846e428be8c');
          console.log(Kakao.isInitialized());`}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
