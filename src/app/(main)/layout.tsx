import type { Metadata } from 'next';
import '@/src/app/globals.scss';
import Footer from '@/src/components/layout/Footer';
import Header from '@/src/components/layout/Header';

export const metadata: Metadata = {
  title: 'the JulGe',
  description: 'codeit sprint part3 tenten',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body suppressHydrationWarning>
        <Header />
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
        <div id='modal' />
      </body>
    </html>
  );
}
