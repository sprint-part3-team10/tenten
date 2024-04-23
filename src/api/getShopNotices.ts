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
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices?offset=${offset}&limit=6`,
  );

  return res.json();
};

export default getShopNotices;
