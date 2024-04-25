import getProfileData from '@/src/api/getProfileData';
import getCardData from '@/src/api/getCardData';
import Link from 'next/link';
import { NEAR_ADDRESS_LIST } from '@/src/constants/constant';
import { cookies } from 'next/headers';
import styles from './CustomCardList.module.scss';
import Card from './Card';
import Button from '../common/Button';
import Carousel from './Carousel';

async function CustomCardList() {
  const userId = cookies().get('u_id')?.value; // '066f080c-5265-4b70-836e-0f1360b57010'; //  '12696aca-8beb-4e2a-a8ee-579029f4f390'; // //
  const { address } = await getProfileData(userId);
  const INITIAL_FILTER = {
    address: [address],
    startsAtGte: new Date(),
    hourlyPayGte: '',
  };
  let newItems = [];

  const { count, items } = address
    ? await getCardData(0, 8, '', INITIAL_FILTER)
    : { count: 0, items: [] };

  newItems = [...items];

  if (address && newItems.length < 8) {
    const nearAddress = [address, ...NEAR_ADDRESS_LIST[address]];
    const { items: otherItems } = await getCardData(0, 8 - count, '', {
      ...INITIAL_FILTER,
      address: nearAddress,
    });
    newItems = [...newItems, ...otherItems];
  }

  if (!address) {
    return (
      <div className={styles.container}>
        <div className={styles.noAddress}>
          <h1>맞춤 공고가 없어요🥺</h1>
          <h2>내 프로필에서 선호 지역을 등록해 내 주변 공고를 확인해보세요!</h2>
          <div className={styles.button}>
            <Link href='/myprofile'>
              <Button size='M' buttonType='button' text='내 프로필 보러 가기' />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>맞춤 공고</h1>
      </div>

      <div className={styles.cardListContainer}>
        <Carousel>
          {newItems?.map(oneItem => (
            <Card
              key={oneItem.item.id}
              data={{
                item_id: oneItem.item.id,
                shop_id: oneItem.item.shop.item.id,
                name: oneItem.item.shop.item.name,
                startsAt: oneItem.item.startsAt,
                workhour: oneItem.item.workhour,
                address1: oneItem.item.shop.item.address1,
                hourlyPay: oneItem.item.hourlyPay,
                imageUrl: oneItem.item.shop.item.imageUrl,
                closed: oneItem.item.closed,
                originalHourlyPay: oneItem.item.shop.item.originalHourlyPay,
              }}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CustomCardList;
