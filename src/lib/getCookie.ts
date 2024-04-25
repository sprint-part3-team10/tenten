'use server';

import { cookies } from 'next/headers';

function getCookie() {
  const userId = cookies().get('u_id')?.value;
  const shopId = cookies().get('s_id')?.value;
  const token = cookies().get('token')?.value;
  const userType = cookies().get('userType')?.value;
  const userCookies = { userId, shopId, token, userType };

  return userCookies;
}

export default getCookie;
