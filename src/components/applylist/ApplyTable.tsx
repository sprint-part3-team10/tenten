/* eslint-disable no-nested-ternary */

'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { formatDateAndTime, formatWage } from '@/src/lib/format';
import { useEffect, useState } from 'react';
import usePagination from '@/src/hooks/usePagination';
import getUserApply from '@/src/api/getUserApply';
import Label from './Label';
import styles from './ApplyTable.module.scss';
import Pagination from '../pagination/Pagination';
// import { cookies } from 'next/headers';

const titleCol = {
  employee: ['가게', '일자', '시급', '상태'],
  employer: ['신청자', '소개', '전화번호', '상태'],
};

function ApplyTable() {
  // const userType = cookies().get('userType')
  const userType = 'employee';
  const userId = '066f080c-5265-4b70-836e-0f1360b57010';
  const [applies, setApplies] = useState([] as unknown);
  const [total, setTotal] = useState<number>(0);

  const LIMIT = 5;
  const { offset, selectedPage, handlePageChange } = usePagination(LIMIT);
  useEffect(() => {
    const fetchData = async () => {
      const { count, items } = await getUserApply(userId, offset);
      setApplies(items);
      setTotal(count);
    };
    fetchData();
  }, [offset]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleRow}>
            <th className={classNames(styles.title, styles.nameCol)}>
              {titleCol[userType][0]}
            </th>
            <th className={classNames(styles.title, styles.timeCol)}>
              {titleCol[userType][1]}
            </th>
            <th className={classNames(styles.title, styles.payCol)}>
              {titleCol[userType][2]}
            </th>
            <th className={classNames(styles.title, styles.statusCol)}>
              {titleCol[userType][3]}
            </th>
          </tr>
        </thead>
        <tbody>
          {applies &&
            applies.map(apply => (
              <tr key={apply.item.id}>
                <td className={classNames(styles.listRow, styles.nameCol)}>
                  {userType === 'employee'
                    ? apply.item.shop.item.name
                    : apply.item.user.item.name}
                </td>
                <td className={classNames(styles.listRow, styles.timeCol)}>
                  {userType === 'employee'
                    ? formatDateAndTime(
                        apply.item.notice.item.startsAt,
                        apply.item.notice.item.workhour,
                      )
                    : apply.item.user.item.bio}
                </td>
                <td className={classNames(styles.listRow, styles.payCol)}>
                  {userType === 'employee'
                    ? formatWage(apply.item.notice.item.hourlyPay)
                    : apply.item.user.item.phone}
                </td>
                <td className={classNames(styles.listRow, styles.statusCol)}>
                  {userType === 'employee' ? (
                    <Label labelType='status' content={apply.item.status} />
                  ) : apply.item.status !== 'pending' ? (
                    <Label labelType='status' content={apply.item.status} />
                  ) : (
                    <>
                      <button className={classNames(styles.btn, styles.reject)}>
                        거절하기
                      </button>
                      <button
                        className={classNames(styles.btn, styles.approve)}
                      >
                        승인하기
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className={styles.pagination}>
              <Pagination
                totalCount={total}
                limit={LIMIT}
                selectedPage={selectedPage}
                handlePageChange={handlePageChange}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ApplyTable;
