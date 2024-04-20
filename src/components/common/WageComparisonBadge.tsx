import Image from 'next/image';
import classNames from 'classnames';
import redArrow from '@/public/icons/wageArrowRed.svg';
import whiteArrow from '@/public/icons/wageArrowWhite.svg';
import styles from './WageComparisonBadge.module.scss';

interface WageComparisonBadgeProps {
  change?: boolean;
}

function WageComparisonBadge({ change = false }: WageComparisonBadgeProps) {
  return (
    <div
      className={classNames(styles.badge, {
        [styles.text]: change,
      })}
    >
      기존 시급보다 50%
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
