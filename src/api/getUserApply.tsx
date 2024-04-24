import { BASE_URL } from './api';

interface UserApplyData {
  count: number;
  items: object[];
}

const getUserApply = async (
  userId: string,
  offset: number,
): Promise<UserApplyData> => {
  const res = await fetch(
    `${BASE_URL}/users/${userId}/applications?offset=${offset}&limit=5`,
    {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNjZmMDgwYy01MjY1LTRiNzAtODM2ZS0wZjEzNjBiNTcwMTAiLCJpYXQiOjE3MTM4ODM4MjF9.IgH9P1rH0q_o65MsIqa9nHAjvhZX9fpEW0sl4jk00ZQ',
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
