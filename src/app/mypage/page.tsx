import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import Alarms from '@/src/components/common/Alarms';
import styles from './page.module.scss';

function mypage() {
  const listNum = 1;
  return (
    <>
      <Alarms />
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
