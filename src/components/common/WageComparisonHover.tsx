import { formatWage } from '@/src/lib/format';
import styles from './WageComparisonHover.module.scss';

interface WageComparisonHoverProps {
  hourlyPay: number;
  originalHourlyPay: number;
}

function WageComparisonHover({
  hourlyPay,
  originalHourlyPay,
}: WageComparisonHoverProps) {
  const increaseRate = Math.ceil((hourlyPay / originalHourlyPay) * 100);

  return (
    <div
      className={styles.popUp}
    >{`${formatWage(hourlyPay)} 기존 시급 대비 ${increaseRate}%`}</div>
  );
}

export default WageComparisonHover;
