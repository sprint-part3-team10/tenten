interface Shop {
  item: {
    id: string;
    name: string;
    category: string;
    address1: string;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
  };
}

const getShop = async (shopId: string): Promise<Shop> => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}`,
    {
      cache: 'no-store',
    },
  );

  return res.json();
};

export default getShop;
