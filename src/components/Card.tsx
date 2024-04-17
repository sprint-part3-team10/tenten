'use client';

import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import locationIcon from '@/public/icons/location.svg';
import locationGrayIcon from '@/public/icons/location_gray.svg';
import clockIcon from '@/public/icons/clock.svg';
import clockGrayIcon from '@/public/icons/clock_gray.svg';
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
  const [closedText, setClosedText] = useState('마감 완료');
  const [closedStatus, setClosedStatus] = useState(data.closed);

  useEffect(() => {
    if (getTimeDifference(data.startsAt)) {
      setClosedStatus(true);
      setClosedText('지난 공고');
    }
  }, [data.startsAt]);

  return (
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
        />
        {closedStatus && <span className={styles.closeText}>{closedText}</span>}
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.storeName}>{data.name}</h2>
        <div className={styles.content}>
          {closedStatus ? (
            <Image
              src={clockGrayIcon}
              alt='시계 아이콘'
              width={20}
              height={20}
            />
          ) : (
            <Image src={clockIcon} alt='시계 아이콘' width={20} height={20} />
          )}

          <h3 className={styles.explain}>
            {formatDateAndTime(data.startsAt, data.workhour)}
          </h3>
        </div>
        <div className={styles.content}>
          {closedStatus ? (
            <Image
              src={locationGrayIcon}
              alt='위치 아이콘'
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={locationIcon}
              alt='위치 아이콘'
              width={20}
              height={20}
            />
          )}

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
