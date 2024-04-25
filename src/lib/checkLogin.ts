import { cookies } from 'next/headers';

interface CheckCookieData {
  hasToken: boolean;
  userType?: 'employee' | 'employer';
}

function checkLogin(): CheckCookieData {
  const cookiesStore = cookies();
  const hasToken = cookiesStore.has('token');
  if (cookiesStore.get('userType')) {
    const userType = cookiesStore.get('userType').value;
    return { hasToken, userType };
  }

  return { hasToken };
}

export default checkLogin;
