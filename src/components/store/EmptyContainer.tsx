import { ReactElement } from 'react';
import styles from './EmptyContainer.module.scss';

interface EmptyContainerProps {
  message: string;
  children: ReactElement;
}

function EmptyContainer({ message, children }: EmptyContainerProps) {
  return (
    <div className={styles.emptyBox}>
      <p className={styles.addShopText}>{message}</p>
      {children}
    </div>
  );
}

export default EmptyContainer;
