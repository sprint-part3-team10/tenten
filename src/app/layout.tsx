import type { Metadata } from 'next';
import '@/src/app/globals.scss';

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
