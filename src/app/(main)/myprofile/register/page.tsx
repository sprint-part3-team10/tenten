import MyProfileRegister from '@/src/components/myProfile/MyProfileRegister';
import getCookie from '@/src/lib/getCookie';
import styles from './page.module.scss';

export default async function Home() {
  const accessToken = getCookie('token');
  const userId = getCookie('u_id');

  return (
    <div className={styles.layout}>
      <MyProfileRegister token={accessToken} userId={userId} />
    </div>
  );
}
