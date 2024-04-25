import MyProfileRegister from '@/src/components/myProfile/register/MyProfileRegister';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.layout}>
      <MyProfileRegister />
    </div>
  );
}
