'use client';

import { useState } from 'react';
import styles from './Filter.module.scss';
import FilterPopover from './FilterPopover';

function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (type: string = '') => {
    if (type === 'filter' && !isOpen) {
      setIsOpen(true);
    } else if (type !== 'filter') setIsOpen(false);
  };

  return (
    <div className={styles.popoverContainer}>
      <button
        className={styles.button}
        type='button'
        onClick={() => handleClick('filter')}
      >
        상세 필터
      </button>
      {isOpen && <FilterPopover onClick={handleClick} />}
    </div>
  );
}

export default FilterButton;
