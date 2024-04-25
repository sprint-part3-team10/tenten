import { BASE_URL } from './api';
import { MyProfileFormData } from '../types/interface';

const putMyProfile = async (
  token: string,
  userId: string,
  myProfileFormData: MyProfileFormData,
) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(myProfileFormData),
  });

  if (!response.ok) {
    let errorMessage = '';
    switch (response.status) {
      case 400:
        errorMessage = '요청 양식에 오류가 있습니다.';
        break;
      case 403:
        errorMessage = '프로필 설정에 대한 권한이 없습니다.';
        break;
      case 404:
        errorMessage = '존재하지 않는 사용자입니다.';
        break;
      default:
        errorMessage = '';
        break;
    }
    throw new Error(errorMessage);
  }
};

export default putMyProfile;
