import Image from 'next/image';
import locationIcon from '@/public/icons/location.svg';
import phoneIcon from '@/public/icons/phone.svg';
import styles from './MyProfile.module.scss';
import Button from '../common/Button';

// const mockData = {
//   name: '김승우',
//   phone: '010-1234-5678',
//   address: '서울시 도봉구',
//   bio: '열심히 일 하겠습니다',
// };

interface MyProfileProps {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export default async function MyProfile({
  name,
  phone,
  address,
  bio,
}: MyProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <h1 className={styles.name}>이름</h1>
        <h2 className={styles.nameText}>{name}</h2>
        <div>
          <Image
            width={20}
            height={20}
            src={phoneIcon}
            alt='phone'
            className={styles.icon}
          />
          <span className={styles.phone}>{phone}</span>
        </div>
        <div>
          <Image
            width={20}
            height={20}
            src={locationIcon}
            alt='area'
            className={styles.icon}
          />
          <span className={styles.address}>선호 지역: {address}</span>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
      <div className={styles.button}>
        <Button buttonType='button' text='편집하기' size='M' isWhite />
      </div>
    </div>
  );
}
