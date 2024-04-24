'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Input from '@/src/components/common/input/Input';
import Dropdown from '@/src/components/common/Dropdown';
import BackSpaceButton from '@/src/components/common/BackSpaceButton';
import {
  STORE_CATEGORY_LIST,
  LOCATION_LIST,
} from '@/src/constants/dropdownList';
import DatePicker from '@/src/components/common/Datepicker';
import styles from './page.module.scss';

export default function Home() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackSpaceButton onClose={handleGoBack} size={25} />
          <p>내 가게 정보</p>
        </div>
        <form className={styles.formBox}>
          <div className={styles.inputBox}>
            <Input label='가게 이름 *' inputType='text' />
            <Dropdown labelName='분류 *' optionList={STORE_CATEGORY_LIST} />
            <Dropdown labelName='주소 *' optionList={LOCATION_LIST} />
            <Input label='상세 주소 *' inputType='text' />
          </div>
        </form>
      </div>
    </div>
  );
}
