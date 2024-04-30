import Image from 'next/image';
import classNames from 'classnames';
import locationIcon from '@/public/icons/location.svg';
import locationGrayIcon from '@/public/icons/location_gray.svg';
import clockIcon from '@/public/icons/clock.svg';
import clockGrayIcon from '@/public/icons/clock_gray.svg';
import Link from 'next/link';
import styles from './Card.module.scss';
import { formatWage, formatDateAndTime } from '../../lib/format';
import { getTimeDifference } from '../../lib/caculate';
import WageComparisonBadge from '../common/WageComparisonBadge';

interface CardData {
  data: {
    item_id: string;
    shop_id: string;
    name: string;
    startsAt: string;
    workhour: number;
    address1: string;
    hourlyPay: number;
    imageUrl: string;
    closed: boolean;
    originalHourlyPay: number;
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
    <Link
      href={`/shops/${data.shop_id}/notices/${data.item_id}`}
      passHref
      className={styles.link}
    >
      <div className={styles.card}>
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
        <div
          className={classNames(styles.contentContainer, {
            [styles.closed]: closedStatus,
          })}
        >
          <h2 className={styles.storeName}>{data.name}</h2>
          <div className={styles.explainContainer}>
            <div className={styles.timeContent}>
              <Image
                src={closedStatus ? clockGrayIcon : clockIcon}
                alt='시계 아이콘'
                width={20}
                height={20}
              />
              <h3 className={styles.date}>
                {formatDateAndTime(data.startsAt, data.workhour)}
              </h3>
            </div>
            <div className={styles.addressContent}>
              <Image
                src={closedStatus ? locationGrayIcon : locationIcon}
                alt='위치 아이콘'
                width={20}
                height={20}
              />
              <h3 className={styles.address}>{data.address1}</h3>
            </div>
          </div>
        </div>
        <div className={styles.priceContainer}>
          <h1
            className={classNames(styles.price, {
              [styles.closed]: closedStatus,
            })}
          >
            {formatWage(data.hourlyPay)}
          </h1>
          <WageComparisonBadge
            originalHourlyPay={data.originalHourlyPay}
            hourlyPay={data.hourlyPay}
            change
            closed={closedStatus}
          />
        </div>
      </div>
    </Link>
  );
}

export default Card;
