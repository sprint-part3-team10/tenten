import getProfileData from '@/src/api/getProfileData';
import getCardData from '@/src/api/getCardData';
import Link from 'next/link';
import { NEAR_ADDRESS_LIST } from '@/src/constants/constant';
import { CardItems, Filter } from '@/src/types/types';
import getCookie from '@/src/lib/getCookie';
import styles from './CustomCardList.module.scss';
import Card from './Card';
import Button from '../common/Button';
import Carousel from './Carousel';

function renderNoAddress() {
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

function renderNoNearNotice() {
  return (
    <div className={styles.container}>
      <div className={styles.noAddress}>
        <h1>내 주변 공고가 없어요😭</h1>
      </div>
    </div>
  );
}

async function fetchItems(filter: Filter): Promise<CardItems[]> {
  const { count } = await getCardData(0, 0, '', filter);
  let offset = 0;
  let fetchedItems: CardItems[] = [];

  while (count > 0 && offset < count && fetchedItems.length < 8) {
    const remainingCount = 8 - fetchedItems.length;
    const { items } = await getCardData(offset, remainingCount, '', filter);
    if (items.length === 0) break;
    fetchedItems = fetchedItems.concat(
      items.filter(oneItem => !oneItem.item.closed),
    );
    offset += items.length;
  }

  return fetchedItems;
}

export default async function CustomCardList() {
  const userId = getCookie('u_id');
  const { address } = (await getProfileData(userId)) || '';

  if (!address) {
    return renderNoAddress();
  }

  const initialFilter = {
    address: [address],
    startsAtGte: new Date(),
    hourlyPayGte: '',
  };

  let newItems = await fetchItems(initialFilter);

  if (newItems.length < 8) {
    const nearAddress = NEAR_ADDRESS_LIST[address];

    const additionalItems = await fetchItems({
      ...initialFilter,
      address: nearAddress,
    });

    newItems = newItems.concat(additionalItems.slice(0, 8 - newItems.length));
  }

  if (newItems.length === 0) {
    return renderNoNearNotice();
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
