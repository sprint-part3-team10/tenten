import Image from 'next/image';
import classNames from 'classnames';
import { formatWage } from '@/src/lib/format';
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
    originalHourlyPay: number;
    hourlyPay: number;
    closed?: boolean;
  };
}

function ShopNoticeInfoBox({ data }: ShopNoticeInfoBoxProps) {
  const {
    kind,
    mainText,
    startsAt,
    workhour,
    description,
    imageUrl,
    address1,
    originalHourlyPay,
    hourlyPay,
    closed,
  } = data;
  const NOTICE = kind === 'notice';
  const NOW = new Date().getTime();
  const STARTS_AT = new Date(startsAt as string).getTime();
  const EXPIRED = NOW > STARTS_AT;

  return (
    <div
      className={classNames(styles.container, {
        [styles.white]: NOTICE,
      })}
    >
      <div className={styles.imageContainer}>
        <Image fill src={imageUrl} alt='식당 이미지' className={styles.image} />
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
              />
            )}
          </div>
          {NOTICE && (
            <div className={styles.term}>
              {NOTICE && `${startsAt}에서 ${workhour}시간 노동`}
            </div>
          )}
          <div className={styles.address}>{address1}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <button className={styles.button} type='button'>
          편집하기
        </button>
      </div>
    </div>
  );
}

// interface에 ?: 사용 시 오류 대응
ShopNoticeInfoBox.defaultProps = {
  startsAt: '',
  workhour: 0,
  closed: false,
};

export default ShopNoticeInfoBox;
