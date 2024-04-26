import { BASE_URL } from './api';

const putAlarmRead = async (userId: string, alertId: string, token: string) => {
  const res = await fetch(`${BASE_URL}/users/${userId}/alerts/${alertId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  const result = await res.json();
  return result;
};

export default putAlarmRead;
