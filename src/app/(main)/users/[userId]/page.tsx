import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import styles from './page.module.scss';

interface MyPageProps {
  params: {
    [param: string]: string;
  };
}

async function mypage({ params }: MyPageProps) {
  const { userId } = params;

  const listNum = 1;

  return (
    <>
      <div className={styles.section}>
        <div className={styles.title}>내 프로필</div>
        <MyProfile id={userId} />
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
