'use client';

import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import Alarms from '@/src/components/common/Alarms';
import styles from './page.module.scss';
import Image from 'next/image';
import alarmsRead from '@/public/icons/alarmsRead.svg';
import alarmsNotRead from '@/public/icons/alarmsNotRead.svg';
import { useRef, useState } from 'react';
import useOutsideClick from '@/src/hooks/useOutsideClick';

function mypage() {
  const listNum = 1;
  const notRead = 0;
  const alarmIcon = notRead ? alarmsNotRead : alarmsRead;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleOpenAlarms = () => {
    setIsOpen(true);
  };

  useOutsideClick(ref, handleCloseClick);

  return (
    <>
      <div onClick={handleOpenAlarms} className={styles.button} ref={ref}>
        <Image src={alarmIcon} width={24} height={24} alt='알람확인아이콘' />

        {isOpen && (
          <div className={styles.alarms}>
            <Alarms handleCloseClick={handleCloseClick} />
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div className={styles.title}>내 프로필</div>
        <MyProfile />
      </div>
      {listNum ? (
        <ApplyTable />
      ) : (
        <NoList
          description='아직 신청 내역이 없어요.'
          // buttonAction='공고 보러가기'
        />
      )}
    </>
  );
}

export default mypage;
