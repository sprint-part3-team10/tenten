import { BASE_URL } from './api';

interface AlarmsData {
  count: number;
  items: {
    item: {
      application: {
        item: {
          status: string;
        };
      };
      createdAt: string;
      notice: {
        item: {
          startsAt: string;
          workhour: number;
        };
      };
      read: boolean;
    };
  };
}
const getAlarms = async (
  userId: string,
  token: string,
): Promise<AlarmsData> => {
  const res = await fetch(`${BASE_URL}/users/${userId}/alerts?limit=100`, {
    headers: {
      authorization: `Bearer ${token}`,
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNjZmMDgwYy01MjY1LTRiNzAtODM2ZS0wZjEzNjBiNTcwMTAiLCJpYXQiOjE3MTQwMjMxMjZ9.tAnHykJc6znAkv26ntNx6-GTHuHXLd5DOz9VecWyEGA',
    },
    cache: 'no-store',
  });
  const result = await res.json();
  console.log('alamr', result);

  if (result.status === 403) {
    throw new Error('권한이 없습니다.');
  } else if (result.status === 400) {
    throw new Error('요청 양식에 오류가 있습니다.');
  }
  return result;
};

export default getAlarms;
