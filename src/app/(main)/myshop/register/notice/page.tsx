import MyNoticeRegister from '@/src/components/store/MyNoticeRegister';
import getCookie from '@/src/lib/getCookie';
import styles from './page.module.scss';

export default function Home() {
  const accessToken = getCookie('token');
  const shopId = getCookie('s_id');

  return (
    <div className={styles.layout}>
      <MyNoticeRegister token={accessToken} shopId={shopId} />
    </div>
  );
}
