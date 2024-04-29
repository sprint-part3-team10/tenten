'use server';

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

const getCookie = (key: string) => {
  const cookiesStore = cookies();
  const hasCookie = cookiesStore.has(key);

  return hasCookie
    ? (cookiesStore.get(key) as RequestCookie).value
    : '쿠키가 존재하지 않습니다.';
};

export default getCookie;
