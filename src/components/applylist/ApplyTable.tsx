import styles from './ApplyTable.module.scss';

function ApplyTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleRow}>
            <th>가게</th>
            <th>일자</th>
            <th>시급</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.listRow}>
            <td>HS 과일주스</td>
            <td>2023-01-12 10:00 ~ 12:00 (2시간)</td>
            <td>15,000원</td>
          </tr>
          <tr className={styles.listRow}>
            <td>수리 에스프레소 샵</td>
            <td>2023-01-12 10:00 ~ 12:00 (2시간)</td>
            <td>15,000원</td>
          </tr>
          <tr className={styles.listRow}>
            <td>초가을집</td>
            <td>2023-01-12 10:00 ~ 12:00 (2시간)</td>
            <td>15,000원</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApplyTable;
