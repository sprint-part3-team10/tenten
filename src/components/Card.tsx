import Image from 'next/image';
import classNames from 'classnames';
import locationIcon from '@/public/icons/location.svg';
import clockIcon from '@/public/icons/clock.svg';
import styles from './Card.module.scss';
import formatDateAndTime from '../lib/format';

interface CardData {
  data: {
    id: string;
    name: string;
    startsAt: string;
    workhour: number;
    address1: string;
    hourlyPay: number;
    imageUrl: string;
    closed: boolean;
  };
}

function Card({ data }: CardData) {
  return (
    <div
      className={classNames(styles.card, {
        [styles.closed]: data.closed,
      })}
    >
      <div
        className={classNames(styles.imgContainer, {
          [styles.closedImg]: data.closed,
        })}
      >
        <Image
          src={data.imageUrl}
          alt='가게 이미지'
          fill
          style={{ objectFit: 'cover' }}
        />
        <span className={styles.closeText}>마감 완료</span>
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.storeName}>{data.name}</h2>
        <div className={styles.content}>
          <Image src={clockIcon} alt='시계 아이콘' width={20} height={20} />
          <h3 className={styles.explain}>
            {formatDateAndTime(data.startsAt, data.workhour)}
          </h3>
        </div>
        <div className={styles.content}>
          <Image src={locationIcon} alt='위치 아이콘' width={20} height={20} />
          <h3 className={styles.explain}>{data.address1}</h3>
        </div>
      </div>
      <div>
        <h1 className={styles.price}>{data.hourlyPay}</h1>
      </div>
    </div>
  );
}

export default Card;
