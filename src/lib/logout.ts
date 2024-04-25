'use server';

import { cookies } from 'next/headers';

async function logout() {
  cookies().delete('u_id');
  cookies().delete('token');
  cookies().delete('userType');
}

export default logout;
