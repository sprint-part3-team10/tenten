import { BASE_URL } from './api';
import { MyShopFormData } from '../types/interface';

const putMyShop = async (
  token: string,
  shopId: string,
  myShopFormData: MyShopFormData,
) => {
  const response = await fetch(`${BASE_URL}/shops/${shopId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(myShopFormData),
  });

  if (!response.ok) {
    let errorMessage = '';
    switch (response.status) {
      case 401:
        errorMessage = '로그인이 필요합니다.';
        break;
      case 403:
        errorMessage = '가게를 수정할 권한이 없습니다.';
        break;
      case 404:
        errorMessage = '존재하지 않는 가게입니다.';
        break;
      default:
        errorMessage = '';
        break;
    }
    throw new Error(errorMessage);
  }
};

export default putMyShop;
