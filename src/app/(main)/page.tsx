import CardList from '@/src/components/card/CardList';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.mainLayout}>
      <CardList />
    </div>
  );
}
