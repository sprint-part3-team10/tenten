'use client';

import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import styles from './page.module.scss';
import Image from 'next/image';
import AlarmSet from '@/src/components/common/AlarmSet';

function mypage() {
  const listNum = 1;

  return (
    <>
      <AlarmSet />
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
