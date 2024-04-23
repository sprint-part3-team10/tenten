import getShop from '@/src/api/getShop';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import { cookies } from 'next/headers';

const myshop = async () => {
  const shopId = cookies().get('shopId');

  if (!shopId) return <div />;

  const { item } = await getShop(shopId.value);

  return (
    <ShopNoticeInfoBox
      data={{
        address1: item.address1,
        description: item.description,
        imageUrl: item.imageUrl,
        kind: 'shop',
        mainText: item.name,
      }}
    />
  );
};

export default myshop;
