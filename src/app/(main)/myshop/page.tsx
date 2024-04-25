import getShop from '@/src/api/getShop';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import { cookies } from 'next/headers';
import Button from '@/src/components/common/Button';
import MyShopNotices from '@/src/components/store/MyShopNotices';
import EventContainer from '@/src/components/store/EventContainer';
import NoList from '@/src/components/applyList/NoList';
import styles from './page.module.scss';

export default async function MyShop() {
  const shopId = cookies().get('shopId');

  if (!shopId?.value) {
    return (
      <div className={styles.layout}>
        <div className={styles.backgroundArea}>
          <div className={styles.tableArea}>
            <NoList
              title='내 가게'
              description='내 가게를 소개하고 공고도 등록해 보세요.'
              text='가게 등록하기'
              pushUrl='/myshop/register'
            />
          </div>
        </div>
      </div>
    );
  }

  const { item } = await getShop(shopId.value);

  return (
    <>
      <section className={styles.outer}>
        <div className={styles.container}>
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
              <EventContainer path='/myshop/register?action=edit'>
                <Button buttonType='button' text='편집하기' isWhite size='M' />
              </EventContainer>
              <EventContainer path='/myshop/register/notice'>
                <Button buttonType='button' text='공고 등록하기' size='M' />
              </EventContainer>
            </div>
          </ShopNoticeInfoBox>
        </div>
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
