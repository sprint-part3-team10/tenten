import Image from 'next/image';
import logo from '@/public/icons/logo.png';
import Link from 'next/link';
import checkLogin from '@/src/lib/checkLogin';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import LogoutButton from '../common/LogoutButton';
import AlarmSet from '../common/alarms/AlarmSet';

export default function Header() {
  const { hasToken, userType } = checkLogin();

  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <Link href='/' scroll={false}>
          <Image
            className={styles.logo}
            src={logo}
            width={110}
            height={25}
            alt='로고'
          />
        </Link>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <div className={styles.activeList}>
          {hasToken ? (
            <>
              {userType === 'employee' ? (
                <>
                  <Link href='/myprofile' scroll={false}>
                    <button>내 프로필</button>
                  </Link>
                  <LogoutButton />
                  <AlarmSet />
                </>
              ) : (
                <>
                  <Link href='/myshop' scroll={false}>
                    <button>내 가게</button>
                  </Link>
                  <LogoutButton />
                </>
              )}
            </>
          ) : (
            <>
              <Link href='/signin' scroll={false}>
                <button>로그인</button>
              </Link>
              <Link href='/signup' scroll={false}>
                <button>회원가입</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
