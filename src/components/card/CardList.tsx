'use client';

import Card from '@/src/components/card/Card';
import Pagination from '@/src/components/pagination/Pagination';
import usePagination from '@/src/hooks/usePagination';
import { useEffect, useRef, useState } from 'react';
import getCardData from '@/src/api/getCardData';
import { STORE_FILTERING_LIST } from '@/src/constants/dropdownList';
import { CardItems, Filter } from '@/src/types/types';
import styles from './CardList.module.scss';
import Dropdown from '../common/Dropdown';
import FilterButton from '../filterPopover/FilterButton';
import Spinner from '../Spinner';

const INITIAL_FILTER = {
  address: [],
  startsAtGte: new Date(),
  hourlyPayGte: '',
};

interface CardListProps {
  search?: string | undefined;
}

function CardList({ search = undefined }: CardListProps) {
  const LIMIT = 6;
  const { offset, selectedPage, handlePageChange } = usePagination(LIMIT);
  const [cardItems, setCardItems] = useState<CardItems[]>();
  const [totalCount, setTotalCount] = useState<number>();
  const [sortText, setSortText] = useState(
    Object.keys(STORE_FILTERING_LIST)[0],
  );
  const [filterItems, setFilterItems] = useState<Filter>(INITIAL_FILTER);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { count, items } = await getCardData(
          offset,
          LIMIT,
          STORE_FILTERING_LIST[sortText],
          filterItems,
          search,
        );
        setCardItems(items);
        setTotalCount(count);

        if (!isFirstRender && ref.current)
          window.scrollTo({
            top: ref.current.offsetTop - 50,
            behavior: 'smooth',
          });
        else setIsFirstRender(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [offset, filterItems, sortText, search]);

  const handleDropdownClick = (selectedValue: string) => {
    setSortText(selectedValue);
    handlePageChange(1);
  };

  const handleFilterItems = (filter: Filter) => {
    setFilterItems(filter);
    handlePageChange(1);
  };

  if (totalCount === undefined) {
    return <Spinner />;
  }

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          {search ? (
            <h1>
              <span>{search}</span>에 대한 공고 목록
            </h1>
          ) : (
            <h1>
              전체 공고 <span className={styles.count}>{totalCount}건</span>
            </h1>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <Dropdown
            width='40%'
            optionList={Object.keys(STORE_FILTERING_LIST)}
            value={sortText}
            onClick={handleDropdownClick}
          />
          <FilterButton
            filterItems={filterItems}
            saveFilteredItems={handleFilterItems}
          />
        </div>
      </div>
      {totalCount === 0 && (
        <div className={styles.noCardList}>등록된 공고가 없습니다.</div>
      )}

      {totalCount > 0 && (
        <>
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
                  originalHourlyPay: oneItem.item.shop.item.originalHourlyPay,
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
        </>
      )}
    </div>
  );
}

export default CardList;
