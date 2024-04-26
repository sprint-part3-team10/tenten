import { BASE_URL } from './api';

interface ProfileData {
  name: string;
  phone: string;
  address: string;
  bio: string;
}
const getProfileData = async (userId: string): Promise<ProfileData> => {
  const res = await fetch(`${BASE_URL}/users/${userId}`, { cache: 'no-store' });

  if (!res.ok) {
    let errorMessage = '';
    switch (res.status) {
      case 400:
        errorMessage = '요청 양식 오류';
        break;
      case 403:
        errorMessage = '권한이 없습니다';
        break;
      case 404:
        errorMessage = '가게나 공고가 존재하지 않습니다';
        break;
      default:
        errorMessage = `${res.status} ${res.statusText}`;
        break;
    }
    throw new Error(errorMessage);
  }

  const result = await res.json();

  return result.item;
};

export default getProfileData;
