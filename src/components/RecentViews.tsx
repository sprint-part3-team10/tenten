'use client';

import Card from './Card';
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
  };
}

const RecentViews = ({ cardData }: RecentViewsProps) => {
  if (typeof localStorage !== 'undefined') {
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

      localStorage.setItem('recentViews', JSON.stringify({ items: newItems }));
    } else {
      localStorage.setItem(
        'recentViews',
        JSON.stringify({ items: [cardData] }),
      );
    }
  }

  return (
    <section>
      <h1 className={styles.sectionTitle}>최근에 본 공고</h1>
      <div className={styles.recentCards}>
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
      </div>
    </section>
  );
};

export default RecentViews;
