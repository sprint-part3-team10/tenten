'use server';

import { cookies } from 'next/headers';

export default async function useLogout() {
  cookies().delete('u_id');
  cookies().delete('token');
  cookies().delete('userType');
  // 여기서는 예시로 'authToken'라는 이름의 쿠키를 삭제합니다.
  // 실제 쿠키 이름에 맞게 조정해주세요.
}
