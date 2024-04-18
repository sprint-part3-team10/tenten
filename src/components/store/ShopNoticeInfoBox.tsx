import Image from 'next/image';
import classNames from 'classnames';
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
  const NOTICE = kind === 'notice';

  return (
    <div
      className={classNames(styles.container, {
        [styles.white]: NOTICE,
      })}
    >
      <div className={styles.imageContainer}>
        <Image fill src={imageUrl} alt='식당 이미지' className={styles.image} />
      </div>
      <div className={styles.textButtonSpace}>
        <div className={styles.textInfo}>
          <p className={styles.category}>{NOTICE ? '시급' : '식당'}</p>
          <div className={styles.title}>
            <span>{NOTICE ? formatWage(Number(mainText)) : mainText}</span>
            {NOTICE && <WageComparisonBadge />}
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
};

export default ShopNoticeInfoBox;
