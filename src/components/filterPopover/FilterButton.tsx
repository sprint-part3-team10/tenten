import React from 'react';
import styles from './Filter.module.scss';

function FilterButton() {
  return (
    <button className={styles.button} type='button'>
      상세 필터
    </button>
  );
}

export default FilterButton;
