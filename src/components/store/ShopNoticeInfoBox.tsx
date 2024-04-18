import Image from 'next/image';
import styles from './ShopNoticeInfoBox.module.scss';
import WageComparisonBadge from '../common/WageComparisonBadge';
import formatWage from '../../lib/formatWage';

interface ShopNoticeInfoBoxProps {
  kind: 'notice' | 'shop';
  mainText: string | number;
  startsAt?: string;
  workhour?: number;
  description: string;
  imageUrl: string;
  address1: string;
}

function ShopNoticeInfoBox({
  kind,
  imageUrl,
  mainText,
  startsAt,
  workhour,
  description,
  address1,
}: ShopNoticeInfoBoxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image fill src={imageUrl} alt='식당 이미지' className={styles.image} />
      </div>
      <div className={styles.textButtonSpace}>
        <div className={styles.textInfo}>
          <p className={styles.category}>
            {kind === 'notice' ? '시급' : '식당'}
          </p>
          <div className={styles.title}>
            <span>
              {kind === 'notice' ? formatWage(Number(mainText)) : mainText}
            </span>
            {kind === 'notice' && <WageComparisonBadge kind='badge' />}
          </div>
          {kind === 'notice' && (
            <div className={styles.term}>
              {kind === 'notice' && `${startsAt}에서 ${workhour}시간 노동`}
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
};

export default ShopNoticeInfoBox;
