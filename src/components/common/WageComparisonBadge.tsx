'use client';

import Image from 'next/image';
import classNames from 'classnames';
import grayArrow from '@/public/icons/wageArrowGray.svg';
import redArrow from '@/public/icons/wageArrowRed.svg';
import whiteArrow from '@/public/icons/wageArrowWhite.svg';
import { useState } from 'react';
import styles from './WageComparisonBadge.module.scss';
import WageComparisonHover from './WageComparisonHover';

interface WageComparisonBadgeProps {
  hourlyPay: number;
  originalHourlyPay: number;
  closed?: boolean;
  change?: boolean;
  noWrap?: boolean;
}

function WageComparisonBadge({
  originalHourlyPay,
  hourlyPay,
  change = false,
  closed = false,
  noWrap = false,
}: WageComparisonBadgeProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const increaseRate = Math.ceil(
    ((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100,
  );

  if (increaseRate <= 0) {
    return null;
  }

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div
      className={styles.outer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
    >
      <div
        className={classNames(styles.badge, {
          [styles.text]: change,
          [styles.closedBadge]: closed,
          [styles.closedText]: closed && change,
        })}
      >
        <span
          className={classNames(styles.badgeText, { [styles.noWrap]: noWrap })}
        >
          기존 시급보다 {increaseRate}%
        </span>
        <Image
          className={classNames({ [styles.whiteArrow]: change })}
          width={20}
          height={20}
          src={whiteArrow}
          alt='하얀색 화살표'
        />
        {change && (
          <Image
            className={classNames({
              [styles.grayArrow]: closed,
              [styles.redArrow]: !closed,
            })}
            width={20}
            height={20}
            src={closed ? grayArrow : redArrow}
            alt='붉은색 화살표'
          />
        )}
      </div>
      {mouseOver && (
        <WageComparisonHover
          hourlyPay={hourlyPay}
          originalHourlyPay={originalHourlyPay}
        />
      )}
    </div>
  );
}

export default WageComparisonBadge;
