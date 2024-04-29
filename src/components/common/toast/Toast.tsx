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

function ToastIcon(isWarning: boolean) {
  const iconSrc = isWarning ? WARNING : COMPLETE;
  const altText = isWarning ? '경고' : '정상';

  return <Image src={iconSrc} alt={altText} width={26} height={26} priority />;
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
        {ToastIcon(isWarning)}
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
