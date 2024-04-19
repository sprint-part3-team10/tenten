import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../SearchBar';
import logo from '@/public/icons/logo.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <Link href='/'>
          <Image
            className={styles.logo}
            src={logo}
            width={110}
            height={20}
            alt='로고'
          />
        </Link>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <div className={styles.activeList}>
          <Link href='/signin'>
            <button>로그인</button>
          </Link>
          <Link href='/signup'>
            <button>회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
