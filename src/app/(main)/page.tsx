'use client';

import Card from '@/src/components/Card';
import Pagination from '@/src/components/pagination/Pagination';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const mockData = {
    item_id: '1234',
    shop_id: '1234',
    name: '해피 버거',
    startsAt: '2023-07-07T18:00:00.000Z',
    workhour: 10,
    address1: '서울시 은평구',
    hourlyPay: 30000,
    imageUrl: '/images/cherry.png',
    closed: false,
  };
  const LIMIT = 6;
  const [selectedPage, setSelectedPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    setOffset((page - 1) * LIMIT);
  };
  useEffect(() => {
    console.log('offset', offset);
  }, [offset]);

  return (
    <div className={styles.test}>
      <Card data={mockData} />
      <Pagination
        totalCount={100}
        limit={LIMIT}
        selectedPage={selectedPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
