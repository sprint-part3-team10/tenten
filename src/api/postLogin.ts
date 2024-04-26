import { BASE_URL } from './api';
import setCookies from '../lib/setCookies';

interface UserData {
  email: string;
  id: string;
  type: 'employee' | 'employer';
}

interface CookieData {
  token: string;
  user: UserData;
}

const postLogin = async (
  email: string,
  password: string,
): Promise<CookieData> => {
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
      case 400:
        errorMessage = '이메일을 입력하세요.';
        break;
      case 404:
        errorMessage = '존재하지 않거나 비밀번호가 일치하지 않습니다.';
        break;
      default:
        errorMessage = '예상치 못한 오류가 발생하였습니다.';
        break;
    }

    throw new Error(errorMessage);
  }

  const { item } = result;
  const token = item.token;
  const user = item.user.item;

  if (user.type === 'employer') {
    const res = await fetch(`${BASE_URL}/users/${user.id}`, {
      cache: 'no-store',
    });
    const result = await res.json();
    const shop = result.item.shop;
    if (shop) {
      const shopId = shop.item.id;
      setCookies({ token, user, shopId });
    } else {
      setCookies({ token, user });
    }
  } else {
    setCookies({ token, user });
  }

  return { token, user };
};

export default postLogin;
