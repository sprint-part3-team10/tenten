import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getProfileData from '@/src/api/getProfileData';
import getUserApply from '@/src/api/getUserApply';
// import { cookies } from 'next/headers';
import styles from './page.module.scss';

// userType = 'employee' : employee일 때 해당 페이지로 이동

interface MyprofileProps {
  params: {
    [param: string]: string;
  };
}

async function myprofile({ params }: MyprofileProps) {
  // const { userId } = params;
  const userId = '066f080c-5265-4b70-836e-0f1360b57010';
  // const userType = cookies().get('userType');
  const userType = { value: 'employee' };

  const { name, phone, address, bio } = await getProfileData(userId);
  const { count } = await getUserApply(userId, 0);

  return !name ? (
    <div className={styles.layout}>
      <NoList
        title='내 프로필'
        description='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
        text='내 프로필 등록하기'
        pushUrl='/myprofile/register'
      />
    </div>
  ) : (
    <>
      <div className={styles.section}>
        <div className={styles.title}>내 프로필</div>
        <div className={styles.profileBox}>
          <MyProfile name={name} phone={phone} address={address} bio={bio} />
        </div>
      </div>
      <div className={styles.backgroundArea}>
        <div className={styles.tableArea}>
          {count ? (
            <div>
              <div className={styles.title}>신청 내역</div>
              <ApplyTable userId={userId} userType={userType?.value} />
            </div>
          ) : (
            <NoList
              title='신청 내역'
              description='아직 신청 내역이 없어요.'
              text='공고 보러가기'
              pushUrl='/'
            />
          )}
        </div>
      </div>
    </>
  );
}

export default myprofile;
