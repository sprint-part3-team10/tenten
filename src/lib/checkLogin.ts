import { cookies } from 'next/headers';
import getCookie from './getCookie';

interface CheckCookieData {
  hasToken: boolean;
  userType?: 'employee' | 'employer';
}

function checkLogin(): CheckCookieData {
  const cookiesStore = cookies();
  const hasToken = cookiesStore.has('token');
  const userType = getCookie('userType');

  return { hasToken, userType };
}

export default checkLogin;
