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

  if (!res.ok) {
    let errorMessage = '';
    switch (res.status) {
      case 400:
        errorMessage = '공고가 마감되었습니다';
        break;
      case 401:
        errorMessage = '로그인이 필요합니다';
        break;
      case 404:
        errorMessage = '가게나 공고, 사용자가 존재하지 않습니다';
        break;
      default:
        errorMessage = `${res.status} ${res.statusText}`;
        break;
    }
    throw new Error(errorMessage);
  }

  return res.json();
};

export default postApplication;
