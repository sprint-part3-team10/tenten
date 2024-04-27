import { useEffect, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [message, duration]);

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast}>
        {isWarning ? (
          <Image src={WARNING} alt='경고' width={26} height={26} />
        ) : (
          <Image src={COMPLETE} alt='정상 동작' width={26} height={26} />
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
