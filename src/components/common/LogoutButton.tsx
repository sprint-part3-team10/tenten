'use client';

import deleteCookie from '@/src/lib/logout';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    await deleteCookie();
    router.push('/');
    router.refresh();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}
