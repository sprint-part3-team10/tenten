import Image from 'next/image';
import location from '@/public/icons/location.svg';
import phone from '@/public/icons/phone.svg';
import getProfileData from '@/src/api/getProfileData';
import styles from './MyProfile.module.scss';
import Button from '../common/Button';

// const mockData = {
//   name: '김승우',
//   phone: '010-1234-5678',
//   address: '서울시 도봉구',
//   bio: '열심히 일 하겠습니다',
// };

interface MyProfileProps {
  id: string;
}

export default async function MyProfile({ id }: MyProfileProps) {
  const result = await getProfileData(id);

  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <h1 className={styles.name}>이름</h1>
        <h2 className={styles.nameText}>{result.name}</h2>
        <div>
          <Image
            width={20}
            height={20}
            src={phone}
            alt='phone'
            className={styles.icon}
          />
          <span className={styles.phone}>{result.phone}</span>
        </div>
        <div>
          <Image
            width={20}
            height={20}
            src={location}
            alt='area'
            className={styles.icon}
          />
          <span className={styles.address}>선호 지역: {result.address}</span>
        </div>
        <p className={styles.bio}>{result.bio}</p>
      </div>
      <div className={styles.button}>
        <Button buttonType='button' text='편집하기' size='M' isWhite />
      </div>
    </div>
  );
}
