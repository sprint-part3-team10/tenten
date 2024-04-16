/* eslint-disable jsx-a11y/control-has-associated-label */
import ApplyStatus from './ApplyStatus';
import styles from './ApplyTable.module.scss';

function ApplyTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleRow}>
            <th className={styles.title}>가게</th>
            <th className={styles.title}>일자</th>
            <th className={styles.title}>시급</th>
            <th className={styles.title}>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.listRow}>HS 과일주스</td>
            <td className={styles.listRow}>2023-01-12 10:00 ~ 12:00 (2시간)</td>
            <td className={styles.listRow}>15,000원</td>
            <td className={styles.listRow}>
              <ApplyStatus />
            </td>
          </tr>
          <tr>
            <td className={styles.listRow}>수리 에스프레소 샵</td>
            <td className={styles.listRow}>2023-01-12 10:00 ~ 12:00 (2시간)</td>
            <td className={styles.listRow}>15,000원</td>
            <td className={styles.listRow}>
              <ApplyStatus />
            </td>
          </tr>
          <tr>
            <td className={styles.listRow}>초가을집</td>
            <td className={styles.listRow}>2023-01-12 10:00 ~ 12:00 (2시간)</td>
            <td className={styles.listRow}>15,000원</td>
            <td className={styles.listRow}>
              <ApplyStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApplyTable;
