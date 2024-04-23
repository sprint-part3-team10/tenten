import { useState } from 'react';
import closeIcon from '@/public/icons/close.svg';
import Image from 'next/image';
import { Filter } from '@/src/types/types';
import styles from './Filter.module.scss';
import LocationBox from './LocationBox';
import DatePicker from '../common/Datepicker';
import Input from '../common/input/Input';
import Button from '../common/Button';

interface FilterPopoverProps {
  handleClose: () => void;
  saveFilteredItems: (filter: Filter) => void;
}

const INITIAL_FILTER = {
  address: [],
  startsAtGte: new Date(),
  hourlyPayGte: '',
};

function FilterPopover({ handleClose, saveFilteredItems }: FilterPopoverProps) {
  const [filter, setFilter] = useState<Filter>(INITIAL_FILTER);

  const handleUpdateFilter = (
    key: keyof Filter,
    value: string[] | Date | number,
  ) => {
    setFilter(prev => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleDateChange = (date: Date) =>
    handleUpdateFilter('startsAtGte', date);
  const handlePayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateFilter('hourlyPayGte', Number(e.target.value));
  };
  const handleLocationChange = (item: string[]) =>
    handleUpdateFilter('address', item);

  const handleSubmitClick = () => {
    saveFilteredItems(filter);
  };

  const handleResetClick = () => {
    setFilter(INITIAL_FILTER);
    saveFilteredItems(INITIAL_FILTER);
  };

  return (
    <div className={styles.popover}>
      <div className={styles.titleContainer}>
        <h1>상세 필터</h1>
        <div className={styles.close} onClick={handleClose}>
          <Image src={closeIcon} width={24} height={24} alt='close popover' />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2>위치</h2>
        <LocationBox
          clickedLocation={filter.address}
          handleChangeLocation={handleLocationChange}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>시작일</h2>
        <DatePicker value={filter.startsAtGte} onChange={handleDateChange} />
      </div>
      <div className={styles.payContainer}>
        <Input
          label='금액'
          width='16.9rem'
          inputType='number'
          placeholder='시급'
          value={filter.hourlyPayGte}
          onChange={handlePayChange}
        />
        <h2>이상부터</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          buttonType='button'
          text='초기화'
          width='30%'
          isWhite
          onClick={handleResetClick}
        />
        <Button
          buttonType='button'
          text='적용하기'
          onClick={handleSubmitClick}
        />
      </div>
    </div>
  );
}

export default FilterPopover;
