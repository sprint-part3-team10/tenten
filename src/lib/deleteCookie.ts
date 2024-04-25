'use server';

import { cookies } from 'next/headers';

async function deleteCookie() {
  cookies().delete('u_id');
  cookies().delete('shop_id');
  cookies().delete('token');
  cookies().delete('userType');
}

export default deleteCookie;
