'use server';

import { cookies } from 'next/headers';

interface UserData {
  email: string;
  id: string;
  type: 'employee' | 'employer';
}

interface CookieData {
  token?: string;
  user?: UserData;
  shopId?: string;
}

function setCookies({ token = '', user, shopId = '' }: CookieData) {
  const cookieStore = cookies();
  const expireTime = 12 * 60 * 60 * 1000;

  if (token) {
    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      expires: Date.now() + expireTime,
    });
  }

  if (user) {
    cookieStore.set({
      name: 'u_id',
      value: user.id,
      httpOnly: true,
      path: '/',
      expires: Date.now() + expireTime,
    });
    cookieStore.set({
      name: 'userType',
      value: user.type,
      httpOnly: true,
      path: '/',
      expires: Date.now() + expireTime,
    });
  }

  if (shopId) {
    cookieStore.set({
      name: 's_id',
      value: shopId,
      httpOnly: true,
      path: '/',
      expires: Date.now() + expireTime,
    });
  }
}

export default setCookies;
