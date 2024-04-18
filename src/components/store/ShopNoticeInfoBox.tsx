import Image from 'next/image';
import styles from './ShopNoticeInfoBox.module.scss';
import WageComparisonBadge from '../common/WageComparisonBadge';
import formatWage from '../../lib/formatWage';

interface ShopData {
  item: {
    id: string;
    name: string;
    category: string;
    address1: string;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
  };
}

// interface User {
//   item: {
//     id: string;
//     email: string;
//     type: string;
//   };
//   href: string;
// }

interface ShopNoticeInfoBoxProps {
  term: boolean;
  noticeData: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: ShopData & {
      href: string;
    };
    currentUserApplication: null;
  };
  // shopData?: (ShopData & User) | null;
}

function ShopNoticeInfoBox({ term, noticeData }: ShopNoticeInfoBoxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          fill
          src={noticeData.shop.item.imageUrl}
          alt='식당 이미지'
          className={styles.image}
        />
      </div>
      <div className={styles.textButtonSpace}>
        <div className={styles.textInfo}>
          <p className={styles.category}>시급</p>
          <div className={styles.title}>
            <span>{formatWage(noticeData.hourlyPay)}</span>
            <WageComparisonBadge />
          </div>
          {term && (
            <div className={styles.term}>2023-01-02 15:00~18:00 (3시간)</div>
          )}
          <div className={styles.address}>{noticeData.shop.item.address1}</div>
          <div className={styles.description}>
            {noticeData.shop.item.description}
          </div>
        </div>
        <button className={styles.button} type='button'>
          편집하기
        </button>
      </div>
    </div>
  );
}

export default ShopNoticeInfoBox;
