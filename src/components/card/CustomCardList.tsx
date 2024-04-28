import getProfileData from '@/src/api/getProfileData';
import getCardData from '@/src/api/getCardData';
import Link from 'next/link';
import { NEAR_ADDRESS_LIST } from '@/src/constants/constant';
import { cookies } from 'next/headers';
import { CardItems, Filter } from '@/src/types/types';
import styles from './CustomCardList.module.scss';
import Card from './Card';
import Button from '../common/Button';
import Carousel from './Carousel';

async function CustomCardList() {
  const userId = cookies().get('u_id')?.value;
  const { address } = (await getProfileData(userId)) || '';
  const INITIAL_FILTER = {
    address: [address],
    startsAtGte: new Date(),
    hourlyPayGte: '',
  };

  const { count } = address
    ? await getCardData(0, 0, '', INITIAL_FILTER)
    : { count: 0 };

  let newItems: CardItems[] = [];
  let offset = 0;

  const fetchItems = async (
    newOffset: number,
    limit: number,
    filter: Filter,
  ) => {
    const { items } = address
      ? await getCardData(newOffset, limit, '', filter)
      : { items: [] };

    return items.filter(oneItem => !oneItem.item.closed);
  };

  while (count > 0 && offset < count && newItems.length < 8) {
    const remainingCount = 8 - newItems.length;
    const moreItems = await fetchItems(offset, remainingCount, INITIAL_FILTER);
    if (moreItems.length === 0) break;
    newItems = newItems.concat(moreItems);
    offset += moreItems.length;
  }

  if (newItems.length < 8) {
    const nearAddress = [...NEAR_ADDRESS_LIST[address]];
    const { count: newcount } = address
      ? await getCardData(0, 0, '', {
          ...INITIAL_FILTER,
          address: nearAddress,
        })
      : { count: 0 };
    offset = 0;

    while (newcount > 0 && offset < newcount && newItems.length < 8) {
      const remainingCount = 8 - newItems.length;
      const moreItems = await fetchItems(offset, remainingCount, {
        ...INITIAL_FILTER,
        address: nearAddress,
      });
      if (moreItems.length === 0) break;
      newItems = newItems.concat(moreItems);
      offset += moreItems.length;
    }
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

  if (newItems.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.noAddress}>
          <h1>내 주변 공고가 없어요😭</h1>
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
