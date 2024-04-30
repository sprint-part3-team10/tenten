import { EmployeeData } from '../types/types';
import { BASE_URL } from './api';

interface UserApplyData {
  count: number;
  items: EmployeeData[];
}

const getUserApply = async (
  userId: string,
  offset: number,
  token: string,
  limit: number = 5,
): Promise<UserApplyData> => {
  const res = await fetch(
    `${BASE_URL}/users/${userId}/applications?offset=${offset}&limit=${limit}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    },
  );
  const result = await res.json();
  const { count, items } = result;

  if (result.status === 403) {
    throw new Error('권한이 없습니다.');
  } else if (result.status === 400) {
    throw new Error('요청 양식이 잘못되었습니다.');
  }
  return { count, items };
};

export default getUserApply;
