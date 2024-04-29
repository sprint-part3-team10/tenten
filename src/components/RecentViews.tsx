'use client';

import { useEffect, useState } from 'react';
import Card from './card/Card';
import styles from './RecentViews.module.scss';

interface RecentViewsProps {
  cardData: {
    closed: boolean;
    hourlyPay: number;
    item_id: string;
    shop_id: string;
    address1: string;
    imageUrl: string;
    name: string;
    startsAt: string;
    workhour: number;
    originalHourlyPay: number;
  };
}

function RecentViews({ cardData }: RecentViewsProps) {
  const [cards, setCards] = useState<RecentViewsProps['cardData'][]>([]);

  useEffect(() => {
    const prevItems = window.localStorage.getItem('recentViews');

    if (prevItems) {
      const { items } = JSON.parse(prevItems);
      const newItems: RecentViewsProps['cardData'][] = [];
      items.unshift(cardData);

      // 중복 제거
      items.reduce((acc: string[], item: RecentViewsProps['cardData']) => {
        if (!acc.includes(item.item_id)) {
          newItems.push(item);
          return [...acc, item.item_id];
        }
        return acc;
      }, []);

      setCards(newItems.slice(1, 7));

      localStorage.setItem(
        'recentViews',
        JSON.stringify({ items: newItems.slice(0, 7) }),
      );
    } else {
      localStorage.setItem(
        'recentViews',
        JSON.stringify({ items: [cardData] }),
      );
    }
  }, []);

  return (
    <section className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.titleDeleteContainer}>
          <h1 className={styles.sectionTitle}>최근에 본 공고</h1>
          {!!cards.length && (
            <button
              className={styles.delete}
              onClick={() => {
                localStorage.clear();
                setCards([]);
              }}
            >
              모두 지우기
            </button>
          )}
        </div>
        {!cards.length && (
          <div className={styles.empty}>최근에 본 공고가 없어요.</div>
        )}
        <div className={styles.recentCards}>
          {cards.map(card => (
            <Card
              key={card.item_id}
              data={{
                originalHourlyPay: card.originalHourlyPay,
                address1: card.address1,
                closed: card.closed,
                hourlyPay: card.hourlyPay,
                imageUrl: card.imageUrl,
                item_id: card.item_id,
                name: card.name,
                shop_id: card.shop_id,
                startsAt: card.startsAt,
                workhour: card.workhour,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentViews;
