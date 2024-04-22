import { useState } from 'react';
import closeIcon from '@/public/icons/close.svg';
import Image from 'next/image';
import styles from './Filter.module.scss';
import LocationBox from './LocationBox';
import DatePicker from '../common/Datepicker';
import Input from '../common/input/Input';
import Button from '../common/Button';

interface FilterPopoverProps {
  onClick: () => void;
}

function FilterPopover({ onClick }: FilterPopoverProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pay, setPay] = useState(0);
  const handleChangeDate = (date: Date) => setSelectedDate(date);
  const handleChangePay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPay(Number(e.target.value));
  };

  return (
    <div className={styles.popover}>
      <div className={styles.titleContainer}>
        <h1>상세 필터</h1>
        <div className={styles.close} onClick={onClick}>
          <Image src={closeIcon} width={24} height={24} alt='close popover' />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2>위치</h2>
        <LocationBox />
      </div>
      <div className={styles.contentContainer}>
        <h2>시작일</h2>
        <DatePicker value={selectedDate} onChange={handleChangeDate} />
      </div>
      <div className={styles.payContainer}>
        <Input
          label='금액'
          width='16.9rem'
          inputType='number'
          placeholder='시급'
          onChange={handleChangePay}
        />
        <h2>이상부터</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button buttonType='button' text='초기화' widthValue='30%' isWhite />
        <Button buttonType='button' text='적용하기' />
      </div>
    </div>
  );
}

export default FilterPopover;
