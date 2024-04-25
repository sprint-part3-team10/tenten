'use server';

import { cookies } from 'next/headers';

async function useLogout(): Promise<void> {
  cookies().delete('u_id');
  cookies().delete('token');
  cookies().delete('userType');
}

export default useLogout;
