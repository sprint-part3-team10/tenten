import type { Metadata } from 'next';
import '@/src/app/globals.scss';

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
