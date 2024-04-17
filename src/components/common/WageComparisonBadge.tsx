import Image from 'next/image';
import styles from './WageComparisonBadge.module.scss';

function WageComparisonBadge() {
  return (
    <div className={styles.badge}>
      기존 시급보다 50%
      <Image
        width={20}
        height={20}
        src='/wageArrow.svg'
        alt='시급 비교 화살표'
      />
    </div>
  );
}

export default WageComparisonBadge;
