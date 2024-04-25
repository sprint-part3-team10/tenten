'use server';

import { cookies } from 'next/headers';

async function deleteCookie() {
  cookies().delete('u_id');
  cookies().delete('s_id');
  cookies().delete('token');
  cookies().delete('userType');
}

export default deleteCookie;
