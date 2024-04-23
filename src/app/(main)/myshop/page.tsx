import getShop from '@/src/api/getShop';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import { cookies } from 'next/headers';
import Button from '@/src/components/common/Button';
import styles from './page.module.scss';

export default async function MyShop() {
  const shopId = cookies().get('shopId');

  if (!shopId)
    return (
      <section>
        <h1 className={styles.sectionTitle}>내 가게</h1>
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
      <h1 className={styles.sectionTitle}>등록한 공고</h1>
    </>
  );
}
