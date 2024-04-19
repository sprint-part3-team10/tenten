import React from 'react';
import closeIcon from '@/public/icons/close.svg';
import Image from 'next/image';
import styles from './Filter.module.scss';
import LocationBox from './LocationBox';

interface FilterPopoverProps {
  onClick: () => void;
}

function FilterPopover({ onClick }: FilterPopoverProps) {
  return (
    <div className={styles.popover}>
      <div className={styles.titleContainer}>
        <h1>상세 필터</h1>
        <div role='button' className={styles.close} onClick={onClick}>
          <Image src={closeIcon} width={24} height={24} alt='close popover' />
        </div>
      </div>
      <div className={styles.locationContainer}>
        <h2>위치</h2>
        <LocationBox />
      </div>
    </div>
  );
}

export default FilterPopover;
