import styles from './Toast.module.scss';

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  return <div className={styles.toastContainer}>{message}</div>;
}
