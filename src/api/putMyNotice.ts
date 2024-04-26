import { BASE_URL } from './api';
import convertToRFC3339 from '../lib/convertToRFC3339';
import { MyNoticeFormData } from '../types/interface';

const putMyNotice = async (
  token: string,
  shopId: string,
  noticeId: string,
  myNoticeFormData: MyNoticeFormData,
) => {
  const { startsAt, ...restData } = myNoticeFormData;
  const convertedStartDate = convertToRFC3339(startsAt, false, false);
  const newFormData = {
    ...restData,
    startsAt: convertedStartDate,
  };

  const response = await fetch(
    `${BASE_URL}/shops/${shopId}/notices/${noticeId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newFormData),
    },
  );

  if (!response.ok) {
    let errorMessage = '';
    switch (response.status) {
      case 400:
        errorMessage = '잘못된 양식입니다.';
        break;
      case 401:
        errorMessage = '로그인이 필요합니다.';
        break;
      case 403:
        errorMessage = '공고를 수정할 권한이 없습니다.';
        break;
      case 404:
        errorMessage = '마감된 공고이거나 존재하지 않는 공고입니다.';
        break;
      default:
        errorMessage = '';
        break;
    }
    throw new Error(errorMessage);
  }
};

export default putMyNotice;
