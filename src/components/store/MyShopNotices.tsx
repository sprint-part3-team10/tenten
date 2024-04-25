'use client';

import getShopNotices, { Item } from '@/src/api/getShopNotices';
import { useEffect, useRef, useState } from 'react';
import Card from '../Card';
import styles from './MyShopNotices.module.scss';
import NoList from '../applyList/NoList';

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
  const [hasNext, setHasNext] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SENTINEL = ref.current;

    const getData = async () => {
      const { hasNext: newHasNext, items } = await getShopNotices(
        shopId,
        offset,
      );
      setCards(prevItems => [...prevItems, ...items]);
      setHasNext(newHasNext);
      setOffset(offset + 6);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && hasNext) {
          getData();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
      rootMargin: '0px 0px -50px 0px',
    });

    observer.observe(SENTINEL as Element);

    return () => {
      observer.unobserve(SENTINEL as Element);
      observer.disconnect();
    };
  }, [offset, hasNext, shopId]);

  return (
    <section className={styles.outer}>
      <div className={styles.container}>
        {!cards.length && !hasNext && (
          <NoList
            title='등록한 공고'
            description='공고를 등록해 보세요.'
            text='공고 등록하기'
            pushUrl='/myshop/register/notice'
          />
        )}
        <div className={styles.shopNotices}>
          {!!cards.length && (
            <h1 className={styles.sectionTitle}>등록한 공고</h1>
          )}
          {cards.map((card, i) => (
            <Card
              key={card.item.id + card.item.id[i]}
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
        <div className={styles.loader} ref={ref} />
      </div>
    </section>
  );
}

export default MyShopNotices;
