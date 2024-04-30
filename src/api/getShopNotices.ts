import { BASE_URL } from './api';

export interface Item {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
  };
}

export interface ShopNotices {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Item[];
}

const getShopNotices = async (
  shopId: string,
  offset: number,
): Promise<ShopNotices> => {
  const res = await fetch(
    `${BASE_URL}/shops/${shopId}/notices?offset=${offset}&limit=6`,
    {
      cache: 'no-store',
    },
  );

  return res.json();
};

export default getShopNotices;
