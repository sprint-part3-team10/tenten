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

  const listNum = 0;

  return listNum === 0 ? (
    <NoList
      title='내 프로필'
      description='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
      text='내 프로필 등록하기'
    />
  ) : (
    <div className={styles.section}>
      <div className={styles.title}>내 프로필</div>
      <MyProfile id={userId} />
    </div>
  );
}

export default mypage;
