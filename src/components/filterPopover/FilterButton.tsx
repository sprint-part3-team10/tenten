'use client';

import { useState } from 'react';
import { Filter } from '@/src/types/types';
import styles from './Filter.module.scss';
import FilterPopover from './FilterPopover';

interface FilterButtonProps {
  saveFilteredItems: (filter: Filter) => void;
}

function FilterButton({ saveFilteredItems }: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (type: string = '') => {
    if (type === 'filter' && !isOpen) {
      setIsOpen(true);
    } else if (type !== 'filter') setIsOpen(false);
  };

  return (
    <div className={styles.popoverContainer}>
      <button
        className={styles.button}
        type='button'
        onClick={() => handleClose('filter')}
      >
        상세 필터
      </button>
      {isOpen && (
        <FilterPopover
          handleClose={handleClose}
          saveFilteredItems={saveFilteredItems}
        />
      )}
    </div>
  );
}

export default FilterButton;
