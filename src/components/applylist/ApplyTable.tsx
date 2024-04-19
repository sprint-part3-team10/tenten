/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { formatDateAndTime } from '@/src/lib/format';
import Label from './Label';
import styles from './ApplyTable.module.scss';

const mockData = {
  shop: {
    item: {
      id: '1234',
      name: '해피 버거',
      address1: '서울시 은평구',
    },
  },
  notice: {
    startsAt: '2023-07-07T18:00:00.000Z',
    workhour: 10,
    hourlyPay: 30000,
  },
};

function ApplyTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleRow}>
            <th className={classNames(styles.title, styles.nameCol)}>가게</th>
            <th className={classNames(styles.title, styles.timeCol)}>일자</th>
            <th className={classNames(styles.title, styles.payCol)}>시급</th>
            <th className={classNames(styles.title, styles.statusCol)}>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classNames(styles.listRow, styles.nameCol)}>
              {mockData.shop.item.name}
            </td>
            <td className={classNames(styles.listRow, styles.timeCol)}>
              {formatDateAndTime(
                mockData.notice.startsAt,
                mockData.notice.workhour,
              )}
            </td>
            <td className={classNames(styles.listRow, styles.payCol)}>
              {mockData.notice.hourlyPay}
            </td>
            <td className={classNames(styles.listRow, styles.statusCol)}>
              <Label labelType='location' content='서울시 도봉구' />
            </td>
          </tr>
          <tr>
            <td className={classNames(styles.listRow, styles.nameCol)}>
              {mockData.shop.item.name}
            </td>
            <td className={classNames(styles.listRow, styles.timeCol)}>
              {formatDateAndTime(
                mockData.notice.startsAt,
                mockData.notice.workhour,
              )}
            </td>
            <td className={classNames(styles.listRow, styles.payCol)}>
              {mockData.notice.hourlyPay}
            </td>
            <td className={classNames(styles.listRow, styles.statusCol)}>
              <Label labelType='status' content='accepted' />
            </td>
          </tr>
          <tr>
            <td className={classNames(styles.listRow, styles.nameCol)}>
              {mockData.shop.item.name}
            </td>
            <td className={classNames(styles.listRow, styles.timeCol)}>
              {formatDateAndTime(
                mockData.notice.startsAt,
                mockData.notice.workhour,
              )}
            </td>
            <td className={classNames(styles.listRow, styles.payCol)}>
              {mockData.notice.hourlyPay}
            </td>
            <td className={classNames(styles.listRow, styles.statusCol)}>
              <Label labelType='status' content='rejected' />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className={styles.pagination}>
              1 2 3 4 5
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ApplyTable;
