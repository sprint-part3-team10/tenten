import Image from 'next/image';
import classNames from 'classnames';
import { formatDateAndTime, formatWage } from '@/src/lib/format';
import { ReactElement } from 'react';
import clockIcon from '@/public/icons/clock.svg';
import locationIcon from '@/public/icons/location.svg';
import { getTimeDifference } from '@/src/lib/caculate';
import styles from './ShopNoticeInfoBox.module.scss';
import WageComparisonBadge from '../common/WageComparisonBadge';

interface ShopNoticeInfoBoxProps {
  data: {
    kind: 'notice' | 'shop';
    mainText: string | number;
    startsAt?: string;
    workhour?: number;
    description: string;
    imageUrl: string;
    address1: string;
    originalHourlyPay?: number;
    hourlyPay?: number;
    closed?: boolean;
  };
  children: ReactElement;
}

function ShopNoticeInfoBox({ data, children }: ShopNoticeInfoBoxProps) {
  const {
    kind,
    mainText,
    startsAt,
    workhour,
    description,
    imageUrl,
    address1,
    originalHourlyPay = 0,
    hourlyPay = 0,
    closed,
  } = data;
  const NOTICE = kind === 'notice';

  const EXPIRED = startsAt ? getTimeDifference(startsAt) : false;

  return (
    <div
      className={classNames(styles.container, {
        [styles.white]: NOTICE,
      })}
    >
      <div className={styles.imageContainer}>
        <Image
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1199px) 50vw, 33vw'
          priority
          style={{ objectFit: 'cover' }}
          src={imageUrl}
          alt='식당 이미지'
          className={styles.image}
        />
        {closed && <div className={styles.closed}>마감 완료</div>}
        {!closed && EXPIRED && <div className={styles.closed}>지난 공고</div>}
      </div>
      <div className={styles.textButtonSpace}>
        <div className={styles.textInfo}>
          <p className={styles.category}>{NOTICE ? '시급' : '식당'}</p>
          <div className={styles.title}>
            <span>{NOTICE ? formatWage(Number(mainText)) : mainText}</span>
            {NOTICE && (
              <WageComparisonBadge
                originalHourlyPay={originalHourlyPay}
                hourlyPay={hourlyPay}
                closed={EXPIRED || closed}
                noWrap
              />
            )}
          </div>
          {NOTICE && (
            <div className={styles.term}>
              <Image src={clockIcon} alt='시계 아이콘' width={20} height={20} />
              {formatDateAndTime(startsAt as string, workhour as number)}
            </div>
          )}
          <div className={styles.address}>
            <Image
              src={locationIcon}
              alt='위치 아이콘'
              width={20}
              height={20}
            />
            {address1}
          </div>
          <div className={styles.description}>{description}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ShopNoticeInfoBox;
