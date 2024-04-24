'use client';

import { useEffect, useState } from 'react';
import { Filter } from '@/src/types/types';
import styles from './Filter.module.scss';
import FilterPopover from './FilterPopover';

interface FilterButtonProps {
  filterItems: Filter;
  saveFilteredItems: (filter: Filter) => void;
}

function FilterButton({ filterItems, saveFilteredItems }: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClose = (type: string = '') => {
    if (type === 'filter' && !isOpen) {
      setIsOpen(true);
    } else if (type !== 'filter') setIsOpen(false);
  };

  useEffect(() => {
    let countFilter = 0;
    if (filterItems.address.length) countFilter += filterItems.address.length;
    if (filterItems.hourlyPayGte) countFilter++;
    if (filterItems.startsAtGte) countFilter++;
    setCount(countFilter);
  }, [filterItems]);

  return (
    <div className={styles.popoverContainer}>
      <button
        className={styles.button}
        type='button'
        onClick={() => handleClose('filter')}
      >
        <span> 상세 필터 {count > 0 && `(${count})`}</span>
      </button>
      {isOpen && (
        <FilterPopover
          handleClose={handleClose}
          filterItems={filterItems}
          saveFilteredItems={saveFilteredItems}
        />
      )}
    </div>
  );
}

export default FilterButton;
