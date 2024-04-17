import Image from 'next/image';
import styles from './StoreInfoBox.module.scss';
import WageComparisonBadge from './WageComparisonBadge';

interface Props {
  term: boolean;
}

function StoreInfoBox(term: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          fill
          src='/examplePlaceImage.png'
          alt='식당 이미지'
          className={styles.image}
        />
      </div>
      <div className={styles.textButtonSpace}>
        <div className={styles.textInfo}>
          <p className={styles.category}>시급</p>
          <div className={styles.title}>
            <span>15,000원</span>
            <WageComparisonBadge />
          </div>
          {term && (
            <div className={styles.term}>2023-01-02 15:00~18:00 (3시간)</div>
          )}
          <div className={styles.address}>서울시 송파구</div>
          <div className={styles.description}>
            알바하기 편한 너구리네 라면집!
            <br />
            라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.
          </div>
        </div>
        <button className={styles.button} type='button'>
          편집하기
        </button>
      </div>
    </div>
  );
}

export default StoreInfoBox;
