'use client';

import Card from '@/src/components/Card';
import { cookies } from 'next/headers';
import styles from './page.module.scss';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/0-2/the-julge';

async function getData() {
  const cookieStore = cookies();

  const res = await fetch(`${BASE_URL}/notices`);
  return res.json();
}

export default async function Home() {
  // const mockData = {
  //   item_id: '1234',
  //   shop_id: '1234',
  //   name: '해피 버거',
  //   startsAt: '2023-07-07T18:00:00.000Z',
  //   workhour: 10,
  //   address1: '서울시 은평구',
  //   hourlyPay: 30000,
  //   imageUrl: '/images/cherry.png',
  //   closed: false,
  // };

  const { items } = await getData();

  return (
    <div className={styles.test}>
      <div className={styles.cardListContainer}>
        {items.map(oneItem => (
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
            }}
          />
        ))}
      </div>
    </div>
  );
}
