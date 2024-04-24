'use client';

import Card from '@/src/components/card/Card';
import Pagination from '@/src/components/pagination/Pagination';
import usePagination from '@/src/hooks/usePagination';
import { useEffect, useState } from 'react';
import getCardData from '@/src/api/getCardData';
import { STORE_FILTERING_LIST } from '@/src/constants/dropdownList';
import { CardItems, Filter } from '@/src/types/types';
import styles from './CardList.module.scss';
import Dropdown from '../common/Dropdown';
import FilterButton from '../filterPopover/FilterButton';

const INITIAL_FILTER = {
  address: [],
  startsAtGte: new Date(),
  hourlyPayGte: '',
};

function CardList() {
  const LIMIT = 6;
  const { offset, selectedPage, handlePageChange } = usePagination(LIMIT);
  const [cardItems, setCardItems] = useState<CardItems['items']>([]);
  const [totalCount, setTotalCount] = useState<number>();
  const [sort, setSort] = useState(STORE_FILTERING_LIST[0]);
  const [filterItems, setFilterItems] = useState<Filter>(INITIAL_FILTER);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (INITIAL_FILTER.startsAtGte === filterItems.startsAtGte) {
          const { count, items } = await getCardData(offset, LIMIT);
          setCardItems(items);
          setTotalCount(count);
        } else {
          const { count, items } = await getCardData(
            offset,
            LIMIT,
            filterItems,
          );
          setCardItems(items);
          setTotalCount(count);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [offset, filterItems]);

  const handleDropdownClick = (selectedValue: string) => {
    setSort(selectedValue);
  };

  const handleFilterItems = (filter: Filter) => {
    setFilterItems(filter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>전체 공고</h1>
        <div className={styles.buttonContainer}>
          <Dropdown
            width='37%'
            optionList={STORE_FILTERING_LIST}
            value={sort}
            onClick={handleDropdownClick}
          />
          <FilterButton saveFilteredItems={handleFilterItems} />
        </div>
      </div>
      <div className={styles.cardListContainer}>
        {cardItems?.map(oneItem => (
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
      <Pagination
        limit={LIMIT}
        totalCount={totalCount}
        selectedPage={selectedPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default CardList;
