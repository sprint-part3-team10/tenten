import { BASE_URL } from './api';

const putAlarmStatus = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: string,
) => {
  const res = await fetch(
    `${BASE_URL}/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NmNhNmJmNC02YjZmLTRmNGYtOTczMS1iODM3Y2NkYmNiNmIiLCJpYXQiOjE3MTM5NjM4NjR9.y-COvjBCzlRxRV_gqBy6tVdYo8ALn4aTU9W5QxdyWQo',
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
