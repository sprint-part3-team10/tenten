import { BASE_URL } from './api';

const putAlarmRead = async (userId: string, alertId: string, token: string) => {
  const res = await fetch(`${BASE_URL}/users/${userId}/alerts/${alertId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNjZmMDgwYy01MjY1LTRiNzAtODM2ZS0wZjEzNjBiNTcwMTAiLCJpYXQiOjE3MTQwMjMxMjZ9.tAnHykJc6znAkv26ntNx6-GTHuHXLd5DOz9VecWyEGA',
    },
    cache: 'no-store',
  });
  const result = await res.json();
  return result;
};

export default putAlarmRead;
