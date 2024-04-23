'use server';

import { cookies } from 'next/headers';
import { BASE_URL } from './api';

interface UserProps {
  email: string;
  id: string;
  type: 'employee' | 'employer';
}

interface LoginProps {
  token: string;
  user: UserProps;
}

const postLogin = async (
  email: string,
  password: string,
): Promise<LoginProps> => {
  const cookieStore = cookies();

  const res = await fetch(`${BASE_URL}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await res.json();

  if (!res.ok) {
    let errorMessage = '';
    switch (res.status) {
      case 404:
        errorMessage = '존재하지 않거나 비밀번호가 일치하지 않습니다.';
        break;
      default:
        errorMessage = '500이네요... 404로 되도록 해봐요';
        break;
    }
    throw new Error(errorMessage);
  }

  const { item } = result;
  const { token, user } = item;
  const oneDay = 12 * 60 * 60 * 1000;

  cookieStore.set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    expires: Date.now() + oneDay,
  });
  cookieStore.set({
    name: 'u_id',
    value: user.item.id,
    httpOnly: true,
    path: '/',
    expires: Date.now() + oneDay,
  });
  cookieStore.set({
    name: 'userType',
    value: user.item.type,
    httpOnly: true,
    path: '/',
    expires: Date.now() + oneDay,
  });

  return { token, user };
};

export default postLogin;
