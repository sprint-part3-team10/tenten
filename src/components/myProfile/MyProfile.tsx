import Image from 'next/image';
import locationIcon from '@/public/icons/location.svg';
import phoneIcon from '@/public/icons/phone.svg';
import Link from 'next/link';
import styles from './MyProfile.module.scss';
import Button from '../common/Button';

interface MyProfileProps {
  name: string | undefined;
  phone: string | undefined;
  address: string | undefined;
  bio: string | undefined;
}

export default async function MyProfile({
  name,
  phone,
  address,
  bio,
}: MyProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.nameButton}>
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
            <span className={styles.address}>선호 지역: {address || '-'}</span>
          </div>
        </div>
        <div className={styles.button}>
          <Link href='/myprofile/register?action=edit'>
            <Button buttonType='button' text='편집하기' size='M' isWhite />
          </Link>
        </div>
      </div>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
}
