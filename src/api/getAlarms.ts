import { AlarmType } from '../types/types';
import { BASE_URL } from './api';

interface AlarmsData {
  count: number;
  items: {
    filter(arg0: (item: AlarmType) => boolean): any;
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
    },
    cache: 'no-store',
  });
  const result = await res.json();

  if (result.status === 403) {
    throw new Error('권한이 없습니다.');
  } else if (result.status === 400) {
    throw new Error('요청 양식에 오류가 있습니다.');
  }
  return result;
};

export default getAlarms;
