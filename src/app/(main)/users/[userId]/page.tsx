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
      {listNum && <ApplyTable />}
    </>
  );
}

export default mypage;
