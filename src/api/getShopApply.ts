import { BASE_URL } from './api';

interface ShopApplyData {
  count: number;
  items: object[];
}

const getShopApply = async (
  shopId: string,
  noticeId: string,
  offset: number,
): Promise<ShopApplyData> => {
  const res = await fetch(
    `${BASE_URL}/shops/${shopId}/notices/${noticeId}/applications?offset=${offset}&limit=5`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NmNhNmJmNC02YjZmLTRmNGYtOTczMS1iODM3Y2NkYmNiNmIiLCJpYXQiOjE3MTM4NjgxMzl9.GHg7XOLvw6AbVZz-ws4cVyJae5k3dGs8DZIR8Hu_BXk',
      },
      cache: 'no-store',
    },
  );
  const result = await res.json();
  const { count, items } = result;

  if (result.status === 403) {
    throw new Error('권한이 없습니다.');
  } else if (result.status === 400) {
    throw new Error('요청 양식이 잘못되었습니다.');
  }
  return { count, items };
};

export default getShopApply;
