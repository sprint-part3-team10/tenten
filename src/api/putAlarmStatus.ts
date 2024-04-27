import { BASE_URL } from './api';

const putAlarmStatus = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: string,
  token: string,
) => {
  const res = await fetch(
    `${BASE_URL}/shopds/${shopId}/notices/${noticeId}/applications/${applicationId}`,
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

  if (!res.ok) {
    let errorMessage;
    switch (res.status) {
      case 400:
        errorMessage = '공고가 마감되었거나 지원이 이미 처리되었습니다.';
        break;
      case 401:
        errorMessage = '로그인이 필요합니다.';
        break;
      case 403:
        errorMessage = '사장님이나 알바생 본인만 접근할 수 있습니다.';
        break;
      case 404:
        errorMessage = '가게나 공고, 지원 정보가 존재하지 않습니다.';
        break;
      default:
        errorMessage = `${res.status} ${res.statusText}`;
        break;
    }
    throw new Error(errorMessage);
  }

  const result = await res.json();
  return result;
};

export default putAlarmStatus;
