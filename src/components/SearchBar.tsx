import Image from 'next/image';
import search from '@/public/icons/search.svg';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <Image src={search} width={20} height={20} alt='검색' />
      <input
        className={styles.searchInput}
        placeholder='가게 이름으로 찾아보세요.'
      />
    </div>
  );
}
