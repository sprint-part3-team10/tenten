'use client';

import { useSearchParams } from 'next/navigation';
import CardList from './CardList';
import styles from './CardList.module.scss';

function SearchCardList() {
  const search = useSearchParams().get('q') || undefined;

  return (
    <div className={styles.searchContainer}>
      <CardList search={search} />
    </div>
  );
}

export default SearchCardList;
