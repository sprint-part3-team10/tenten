import styles from './ApplyStatus.module.scss';

function ApplyStatus() {
  const status = '승인 완료';

  const labelStyle =
    status === '승인 완료'
      ? styles.labelAccept
      : status === '거절'
        ? styles.labelReject
        : styles.labelWaiting;

  return <div className={`${styles.label} ${labelStyle}`}>{status}</div>;
}

export default ApplyStatus;
