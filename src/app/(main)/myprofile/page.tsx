import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getProfileData from '@/src/api/getProfileData';
import getUserApply from '@/src/api/getUserApply';
import styles from './page.module.scss';

// userType = 'employee' : employee일 때 해당 페이지로 이동

interface MyprofileProps {
  params: {
    [param: string]: string;
  };
}

async function myprofile({ params }: MyprofileProps) {
  // const { userId } = params;
  const userId = '56ca6bf4-6b6f-4f4f-9731-b837ccdbcb6b';

  const { name, phone, address, bio } = await getProfileData(userId);

  const { count, items } = await getUserApply(userId);

  return !name ? (
    <div className={styles.layout}>
      <NoList
        title='내 프로필'
        description='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
        text='내 프로필 등록하기'
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
              <ApplyTable totalCount={count} applies={items} />
            </div>
          ) : (
            <NoList
              title='신청 내역'
              description='아직 신청 내역이 없어요.'
              text='공고 보러가기'
            />
          )}
        </div>
      </div>
    </>
  );
}

export default myprofile;
