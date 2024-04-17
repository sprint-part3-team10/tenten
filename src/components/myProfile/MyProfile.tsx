import Image from 'next/image';
import location from '@/public/icons/location.svg';
import phone from '@/public/icons/phone.svg';
import styles from './MyProfile.module.scss';

const mockData = {
  name: '김승우',
  phone: '010-1234-5678',
  address: '서울시 도봉구',
  bio: '열심히 일 하겠습니다',
};

export default function MyProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <h1 className={styles.name}>이름</h1>
        <h2 className={styles.nameText}>{mockData.name}</h2>
        <div>
          <Image
            width={20}
            height={20}
            src={phone}
            alt='phone'
            className={styles.icon}
          />
          <span className={styles.phone}>{mockData.phone}</span>
        </div>
        <div>
          <Image
            width={20}
            height={20}
            src={location}
            alt='area'
            className={styles.icon}
          />
          <span className={styles.address}>선호 지역: {mockData.address}</span>
        </div>
        <p className={styles.bio}>{mockData.bio}</p>
      </div>
      {/* 버튼 컴포넌트 */}
    </div>
  );
}
