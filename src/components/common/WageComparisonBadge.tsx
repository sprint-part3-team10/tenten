import Image from 'next/image';
import classNames from 'classnames';
import styles from './WageComparisonBadge.module.scss';
import redArrow from '@/public/icons/wageArrowRed.svg';
import whiteArrow from '@/public/icons/wageArrowWhite.svg';

interface WageComparisonBadgeProps {
  kind: 'badge' | 'text';
}

function WageComparisonBadge({ kind = 'badge' }: WageComparisonBadgeProps) {
  return (
    <div
      className={classNames(styles.badge, {
        [styles.text]: kind === 'text',
      })}
    >
      기존 시급보다 50%
      <Image
        width={20}
        height={20}
        src={kind === 'badge' ? whiteArrow : redArrow}
        alt='시급 비교 화살표'
      />
    </div>
  );
}

export default WageComparisonBadge;
