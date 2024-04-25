import { cookies } from 'next/headers';

interface CheckCookieData {
  hasToken: boolean;
  userType: 'employee' | 'employer';
}

function checkLogin(): CheckCookieData {
  const cookiesStore = cookies();
  const hasToken = cookiesStore.has('token');
  const userType = cookiesStore.get('userType').value;

  return { hasToken, userType };
}

export default checkLogin;
