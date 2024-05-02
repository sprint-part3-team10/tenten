import type { Metadata } from 'next';
import '@/src/app/globals.scss';
import Footer from '@/src/components/layout/Footer';
import Header from '@/src/components/layout/Header';

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
      <body suppressHydrationWarning>
        <Header />
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
        <div id='modal' />
      </body>
    </html>
  );
}
