import ApplyTable from '@/src/components/applyList/ApplyTable';
import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import styles from './page.module.scss';

function mypage() {
  return (
    <>
      <div className={styles.section}>
        <h1 className={styles.title}>내 프로필</h1>
        <MyProfile />
      </div>
      <NoList
        description={'아직 신청 내역이 없어요.'}
        buttonAction={'공고 보러가기'}
      />
    </>
  );
}

export default mypage;
