import getShop from '@/src/api/getShop';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import { cookies } from 'next/headers';
import Button from '@/src/components/common/Button';
import MyShopNotices from '@/src/components/store/MyShopNotices';
import styles from './page.module.scss';

export default async function MyShop() {
  const shopId = cookies().get('shopId');

  if (!shopId)
    return (
      <section>
        <h1 className={styles.sectionTitle}>내 가게</h1>
        <div className={styles.emptyBox}>
          <p className={styles.addShopText}>
            내 가게를 소개하고 공고도 등록해 보세요.
          </p>
          <Button buttonType='button' text='가게 등록하기' width='40%' />
        </div>
      </section>
    );

  const { item } = await getShop(shopId.value);

  return (
    <>
      <section>
        <h1 className={styles.sectionTitle}>내 가게</h1>
        <ShopNoticeInfoBox
          data={{
            address1: item.address1,
            description: item.description,
            imageUrl: item.imageUrl,
            kind: 'shop',
            mainText: item.name,
          }}
        >
          <div className={styles.buttonContainer}>
            <Button buttonType='button' text='편집하기' isWhite size='M' />
            <Button buttonType='button' text='공고 등록하기' size='M' />
          </div>
        </ShopNoticeInfoBox>
        <div style={{ marginBottom: '12rem' }} />
      </section>
      <MyShopNotices
        address1={item.address1}
        imageUrl={item.imageUrl}
        shopId={shopId.value}
        shop_name={item.name}
      />
    </>
  );
}
