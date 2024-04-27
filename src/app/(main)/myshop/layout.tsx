import getCookies from '@/src/lib/getCookies';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface MyShopLayoutProps {
  children: ReactNode;
}

export default function MyShopLayout({ children }: MyShopLayoutProps) {
  const { userType } = getCookies();

  if (userType !== 'employer') redirect('/');

  return <>{children}</>;
}
