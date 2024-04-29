import { BASE_URL } from './api';
import { Shop } from './getShop';

interface ProfileData {
  id: string;
  email: string;
  type: 'employer' | 'employee';
  shop: Shop;
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

const getProfileData = async (
  userId: string | undefined,
): Promise<ProfileData> => {
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
