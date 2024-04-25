'use server';

import { cookies } from 'next/headers';

interface UserData {
  email: string;
  id: string;
  type: 'employee' | 'employer';
}

interface CookieData {
  token: string;
  user: UserData;
}

function setCookie({ token, user }: CookieData) {
  const cookieStore = cookies();
  const expireTime = 12 * 60 * 60 * 1000;

  cookieStore.set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    expires: Date.now() + expireTime,
  });
  cookieStore.set({
    name: 'u_id',
    value: user.item.id,
    httpOnly: true,
    path: '/',
    expires: Date.now() + expireTime,
  });
  cookieStore.set({
    name: 'userType',
    value: user.item.type,
    httpOnly: true,
    path: '/',
    expires: Date.now() + expireTime,
  });
}

export default setCookie;
