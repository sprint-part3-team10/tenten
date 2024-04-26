import { BASE_URL } from './api';

const putApplication = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  token?: string,
) => {
  const res = await fetch(
    `${BASE_URL}/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
    {
      method: 'PUT',
      cache: 'no-store',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: 'canceled',
      }),
    },
  );

  return res.json();
};

export default putApplication;
