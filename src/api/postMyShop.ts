import { BASE_URL } from './api';
import { MyShopFormData } from '../types/interface';
import setCookies from '../lib/setCookies';

const postMyShop = async (token: string, myShopFormData: MyShopFormData) => {
  const response = await fetch(`${BASE_URL}/shops`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(myShopFormData),
  });

  const result = await response.json();

  if (!response.ok) {
    let errorMessage = '';
    switch (response.status) {
      case 400:
        errorMessage = '가게 이미지를 첨부해 주세요.';
        break;
      case 401:
        errorMessage = '로그인이 필요합니다.';
        break;
      case 409:
        errorMessage = '이미 등록한 가게가 있습니다.';
        break;
      default:
        errorMessage = '';
        break;
    }
    throw new Error(errorMessage);
  }

  const shopId = result.item.id;
  setCookies({ shopId });
};

export default postMyShop;
