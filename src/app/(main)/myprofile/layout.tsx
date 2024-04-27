import getCookies from '@/src/lib/getCookies';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface MyProfileLayoutProps {
  children: ReactNode;
}

export default function MyShopLayout({ children }: MyProfileLayoutProps) {
  const { userType } = getCookies();

  if (userType !== 'employee') redirect('/');

  return <>{children}</>;
}
