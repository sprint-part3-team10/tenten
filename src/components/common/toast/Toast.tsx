import { useEffect } from 'react';
import COMPLETE from '@/public/icons/completed.png';
import WARNING from '@/public/icons/warning.svg';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Toast.module.scss';

interface ToastProps {
  message: string;
  duration?: number;
  isWarning?: boolean;
}

export default function Toast({
  message,
  duration = 1500,
  isWarning = false,
}: ToastProps) {
  let isVisible: boolean = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      isVisible = true;
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [message, duration]);

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast}>
        {isWarning ? (
          <Image src={WARNING} alt='경고' width={26} height={26} priority />
        ) : (
          <Image
            src={COMPLETE}
            alt='정상 동작'
            width={26}
            height={26}
            priority
          />
        )}
        {message}
      </div>
      <div
        className={classNames(styles.progressBar, {
          [styles.warning]: isWarning,
        })}
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
