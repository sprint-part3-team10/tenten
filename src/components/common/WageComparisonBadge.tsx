import Image from 'next/image';
import classNames from 'classnames';
import grayArrow from '@/public/icons/wageArrowGray.svg';
import redArrow from '@/public/icons/wageArrowRed.svg';
import whiteArrow from '@/public/icons/wageArrowWhite.svg';
import styles from './WageComparisonBadge.module.scss';

interface WageComparisonBadgeProps {
  hourlyPay: number;
  originalHourlyPay: number;
  closed?: boolean;
  change?: boolean;
}

function WageComparisonBadge({
  originalHourlyPay,
  hourlyPay,
  change = false,
  closed = false,
}: WageComparisonBadgeProps) {
  const increaseRate = Math.ceil((hourlyPay / originalHourlyPay) * 100);

  return (
    <div
      className={classNames(styles.badge, {
        [styles.text]: change,
        [styles.closedBadge]: closed,
        [styles.closedText]: closed && change,
      })}
    >
      기존 시급보다 {increaseRate}%
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
  );
}

export default WageComparisonBadge;
