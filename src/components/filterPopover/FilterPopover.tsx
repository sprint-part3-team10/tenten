import React, { useState } from 'react';
import closeIcon from '@/public/icons/close.svg';
import Image from 'next/image';
import styles from './Filter.module.scss';
import LocationBox from './LocationBox';
import DatePicker from '../common/Datepicker';

interface FilterPopoverProps {
  onClick: () => void;
}

function FilterPopover({ onClick }: FilterPopoverProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChangeDate = (date: Date) => setSelectedDate(date);

  return (
    <div className={styles.popover}>
      <div className={styles.titleContainer}>
        <h1>상세 필터</h1>
        <div className={styles.close} onClick={onClick}>
          <Image src={closeIcon} width={24} height={24} alt='close popover' />
        </div>
      </div>
      <div className={styles.locationContainer}>
        <h2>위치</h2>
        <LocationBox />
      </div>
      <div className={styles.locationContainer}>
        <h2>시작일</h2>
        <DatePicker value={selectedDate} onChange={handleChangeDate} />
      </div>
    </div>
  );
}

export default FilterPopover;
