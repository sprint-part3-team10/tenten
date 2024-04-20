import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getProfileData from '@/src/api/getProfileData';
import styles from './page.module.scss';

interface MyPageProps {
  params: {
    [param: string]: string;
  };
}

async function mypage({ params }: MyPageProps) {
  const { userId } = params;

  const result = await getProfileData(userId);
  const { name, phone, address, bio } = result;
  const listNum = 0;

  return !name ? (
    <div className={styles.section}>
      <div className={styles.title}>내 프로필</div>
      <div className={styles.profileBox}>
        <MyProfile name={name} phone={phone} address={address} bio={bio} />
      </div>
    </div>
  ) : (
    <NoList
      title='내 프로필'
      description='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
      text='내 프로필 등록하기'
    />
  );
}

export default mypage;
