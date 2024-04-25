'use client';

import logout from '@/src/lib/logout';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push('/');
    router.refresh();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}
