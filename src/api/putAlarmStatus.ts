import { BASE_URL } from './api';

const putAlarmStatus = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: string,
  token: string,
) => {
  const res = await fetch(
    `${BASE_URL}/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status,
      }),
      cache: 'no-store',
    },
  );
  const result = await res.json();
  return result;
};

export default putAlarmStatus;
