import MyShopRegister from '@/src/components/store/MyShopRegister';
import getCookie from '@/src/lib/getCookie';
import styles from './page.module.scss';

export default function Home() {
  const accessToken = getCookie('token');

  return (
    <div className={styles.layout}>
      <MyShopRegister token={accessToken} />
    </div>
  );
}
