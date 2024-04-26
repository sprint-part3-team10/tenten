import { BASE_URL } from './api';

const postApplication = async (
  shopId: string,
  noticeId: string,
  token?: string,
) => {
  const res = await fetch(
    `${BASE_URL}/shops/${shopId}/notices/${noticeId}/applications`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    },
  );

  return res.json();
};

export default postApplication;
