/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import Label from './Label';
import styles from './ApplyTable.module.scss';

function ApplyTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleRow}>
            <th className={styles.title}>가게</th>
            <th className={classNames(styles.title, styles.timeCol)}>일자</th>
            <th className={classNames(styles.title, styles.payCol)}>시급</th>
            <th className={styles.title}>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.listRow}>HS 과일주스</td>
            <td className={classNames(styles.listRow, styles.timeCol)}>
              2023-01-12 10:00 ~ 12:00 (2시간)
            </td>
            <td className={classNames(styles.listRow, styles.payCol)}>
              15,000원
            </td>
            <td className={styles.listRow}>
              <Label labelType='location' content='서울시 도봉구' />
            </td>
          </tr>
          <tr>
            <td className={styles.listRow}>수리 에스프레소 샵</td>
            <td className={classNames(styles.listRow, styles.timeCol)}>
              2023-01-12 10:00 ~ 12:00 (2시간)
            </td>
            <td className={classNames(styles.listRow, styles.payCol)}>
              15,000원
            </td>
            <td className={styles.listRow}>
              <Label labelType='status' content='accepted' />
            </td>
          </tr>
          <tr>
            <td className={styles.listRow}>초가을집</td>
            <td className={classNames(styles.listRow, styles.timeCol)}>
              2023-01-12 10:00 ~ 12:00 (2시간)
            </td>
            <td className={classNames(styles.listRow, styles.payCol)}>
              15,000원
            </td>
            <td className={styles.listRow}>
              <Label labelType='status' content='rejected' />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className={styles.pagenation}>
              1 2 3 4 5
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ApplyTable;
