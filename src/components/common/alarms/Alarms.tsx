import Image from 'next/image';
import close from '@/public/icons/close.svg';
import styles from './Alarms.module.scss';
import AlarmContainer from './AlarmContainer';

interface AlarmsProps {
  handleCloseClick: () => void;
  userId: string;
  token: string;
}

export default function Alarms({
  handleCloseClick,
  userId,
  token,
}: AlarmsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={handleCloseClick}>
        <Image width={24} height={24} src={close} alt='close' />
      </button>
      <AlarmContainer userId={userId} token={token} />
    </div>
  );
}
