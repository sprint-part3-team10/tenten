import { BASE_URL } from './api';

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
  const res = await fetch(`${BASE_URL}/shops/${shopId}`, {
    cache: 'no-store',
  });

  return res.json();
};

export default getShop;
