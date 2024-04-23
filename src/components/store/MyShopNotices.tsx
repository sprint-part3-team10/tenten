'use client';

import getShopNotices, { Item } from '@/src/api/getShopNotices';
import { useEffect, useState } from 'react';
import Card from '../Card';
import styles from './MyShopNotices.module.scss';

interface MyShopNoticesProps {
  shopId: string;
  address1: string;
  imageUrl: string;
  shop_name: string;
}

function MyShopNotices({
  shopId,
  address1,
  imageUrl,
  shop_name,
}: MyShopNoticesProps) {
  const [cards, setCards] = useState<Item[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const getData = async () => {
    const { items } = await getShopNotices(shopId, offset);
    console.log(items);
    setCards(items);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <section>
      <h1 className={styles.sectionTitle}>등록한 공고</h1>
      {/* {!cards.length && (
        <div className={styles.empty}>최근에 본 공고가 없어요.</div>
      )} */}
      <div className={styles.shopNotices}>
        {cards.map(card => (
          <Card
            key={card.item.id}
            data={{
              closed: card.item.closed,
              hourlyPay: card.item.hourlyPay,
              startsAt: card.item.startsAt,
              workhour: card.item.workhour,
              item_id: card.item.id,
              shop_id: shopId,
              address1,
              imageUrl,
              name: shop_name,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default MyShopNotices;
