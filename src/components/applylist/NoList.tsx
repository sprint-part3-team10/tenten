'use client';

import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import styles from './NoList.module.scss';

interface NoListProps {
  title: string;
  description: string;
  text: string;
  pushUrl: string;
}
function NoList({ title, description, text, pushUrl }: NoListProps) {
  const router = useRouter();

  const handleButtonClick = () => router.push(pushUrl);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.tabletFit}>
        <div className={styles.box}>
          <p className={styles.description}>{description}</p>
          <div className={styles.button}>
            <Button
              buttonType='button'
              text={text}
              size='M'
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoList;
