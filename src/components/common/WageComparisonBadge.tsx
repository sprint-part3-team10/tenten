import Image from 'next/image';
import classNames from 'classnames';
import redArrow from '@/public/icons/wageArrowRed.svg';
import whiteArrow from '@/public/icons/wageArrowWhite.svg';
import styles from './WageComparisonBadge.module.scss';

interface WageComparisonBadgeProps {
  change?: boolean;
  hourlyPay: number;
  originalHourlyPay: number;
}

function WageComparisonBadge({
  originalHourlyPay,
  hourlyPay,
  change = false,
}: WageComparisonBadgeProps) {
  const increaseRate = Math.ceil((hourlyPay / originalHourlyPay) * 100);

  return (
    <div
      className={classNames(styles.badge, {
        [styles.text]: change,
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
          className={styles.redArrow}
          width={20}
          height={20}
          src={redArrow}
          alt='붉은색 화살표'
        />
      )}
    </div>
  );
}

export default WageComparisonBadge;
