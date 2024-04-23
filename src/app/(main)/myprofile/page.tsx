import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getProfileData from '@/src/api/getProfileData';
import getUserApply from '@/src/api/getUserApply';
import styles from './page.module.scss';

// const userType = 'employee' : employee일 때 해당 페이지로 이동

async function myprofile() {
  const { name, phone, address, bio } = await getProfileData(
    '066f080c-5265-4b70-836e-0f1360b57010',
  );
  console.log(name);

  const { count, items } = await getUserApply(
    '066f080c-5265-4b70-836e-0f1360b57010',
  );

  return !name ? (
    <NoList
      title='내 프로필'
      description='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
      text='내 프로필 등록하기'
    />
  ) : (
    <>
      <div className={styles.section}>
        <div className={styles.title}>내 프로필</div>
        <div className={styles.profileBox}>
          <MyProfile name={name} phone={phone} address={address} bio={bio} />
        </div>
      </div>
      <div className={styles.backgroundArea}>
        {count ? (
          <div className={styles.applyArea}>
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
    </>
  );
}

export default myprofile;
