import { cookies } from 'next/headers';
import getCookie from './getCookie';

interface CheckCookieData {
  hasToken: boolean;
  userType?: 'employee' | 'employer' | undefined;
}

function checkLogin(): CheckCookieData {
  const cookiesStore = cookies();
  const hasToken = cookiesStore.has('token');
  let userType: string | undefined = getCookie('userType');

  if (userType !== 'employee' && userType !== 'employer') {
    userType = undefined;
  }

  return { hasToken, userType };
}

export default checkLogin;
