'use server';

import { cookies } from 'next/headers';

export default async function useLogout() {
  cookies().delete('u_id');
  cookies().delete('token');
  cookies().delete('userType');
}
