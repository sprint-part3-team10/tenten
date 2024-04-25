'use server';

import { cookies } from 'next/headers';

function setShopCookie(shopId: string) {
  const cookieStore = cookies();
  const expireTime = 12 * 60 * 60 * 1000;

  cookieStore.set({
    name: 's_id',
    value: shopId,
    httpOnly: true,
    path: '/',
    expires: Date.now() + expireTime,
  });
}

export default setShopCookie;
