import Image from 'next/image';
import classNames from 'classnames';
import locationIcon from '@/public/icons/location.svg';
import locationGrayIcon from '@/public/icons/location_gray.svg';
import clockIcon from '@/public/icons/clock.svg';
import clockGrayIcon from '@/public/icons/clock_gray.svg';
import Link from 'next/link';
import styles from './Card.module.scss';
import { formatDateAndTime, getTimeDifference } from '../lib/format';

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
  let closedText = '마감 완료';
  let closedStatus = data.closed;

  if (getTimeDifference(data.startsAt)) {
    closedStatus = true;
    closedText = '지난 공고';
  }

  return (
    <Link href={`/${data.id}`} passHref>
      <div>
        <div
          className={classNames(styles.card, {
            [styles.closed]: closedStatus,
          })}
        >
          <div
            className={classNames(styles.imgContainer, {
              [styles.closedImg]: closedStatus,
            })}
          >
            <Image
              src={data.imageUrl}
              alt='가게 이미지'
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes='28rem'
            />
            {closedStatus && (
              <span className={styles.closeText}>{closedText}</span>
            )}
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.storeName}>{data.name}</h2>
            <div className={styles.content}>
              <Image
                src={closedStatus ? clockGrayIcon : clockIcon}
                alt='시계 아이콘'
                width={20}
                height={20}
              />
              <h3 className={styles.explain}>
                {formatDateAndTime(data.startsAt, data.workhour)}
              </h3>
            </div>
            <div className={styles.content}>
              <Image
                src={closedStatus ? locationGrayIcon : locationIcon}
                alt='위치 아이콘'
                width={20}
                height={20}
              />
              <h3 className={styles.explain}>{data.address1}</h3>
            </div>
          </div>
          <div>
            <h1 className={styles.price}>{data.hourlyPay}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
