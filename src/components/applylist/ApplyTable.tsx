/* eslint-disable no-nested-ternary */

'use client';

import classNames from 'classnames';
import { formatDateAndTime, formatWage } from '@/src/lib/format';
import { useEffect, useState } from 'react';
import usePagination from '@/src/hooks/usePagination';
import getUserApply from '@/src/api/getUserApply';
import getShopApply from '@/src/api/getShopApply';
import putAlarmStatus from '@/src/api/putAlarmStatus';
import Label from './Label';
import styles from './ApplyTable.module.scss';
import Pagination from '../pagination/Pagination';
import ModalPortal from '../common/modal/ModalPortal';
import Modal from '../common/modal/Modal';

interface ApplyTableProps {
  noticeId?: string;
  shopId?: string;
  userId?: string;
  userType: string;
  token?: string;
}

const titleCol = {
  employee: ['가게', '일자', '시급', '상태'],
  employer: ['신청자', '소개', '전화번호', '상태'],
};

function ApplyTable(props: ApplyTableProps) {
  const { userType, token } = props;

  const [applies, setApplies] = useState([] as unknown);
  const [total, setTotal] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [applyId, setApplyId] = useState('');

  const handleModalClick = (value: string, id: string) => {
    setOpen(true);
    const text =
      value === 'rejected'
        ? '신청을 거절하시겠어요?'
        : '신청을 승인하시겠어요?';
    setMessage(text);
    setStatus(value);
    setApplyId(id);
  };

  const handleModal = (value: boolean) => {
    setOpen(value);
  };

  const LIMIT = 5;
  const { offset, selectedPage, handlePageChange } = usePagination(LIMIT);

  useEffect(() => {
    const fetchData = async () => {
      const { count, items } =
        userType === 'employee'
          ? await getUserApply(props.userId, offset, token)
          : await getShopApply(props.shopId, props.noticeId, offset, token);
      setApplies(items);
      setTotal(count);
    };
    fetchData();
  }, [offset]);

  return (
    <>
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
                        <button
                          className={classNames(styles.btn, styles.reject)}
                          onClick={() =>
                            handleModalClick('rejected', apply.item.id)
                          }
                        >
                          거절하기
                        </button>
                        <button
                          className={classNames(styles.btn, styles.approve)}
                          onClick={() =>
                            handleModalClick('accepted', apply.item.id)
                          }
                        >
                          승인하기
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <Pagination
          totalCount={total}
          limit={LIMIT}
          selectedPage={selectedPage}
          handlePageChange={handlePageChange}
        />
      </div>

      {open && (
        <ModalPortal>
          <Modal
            icon='check'
            handleButton={[
              () => {
                putAlarmStatus(
                  props.shopId,
                  props.noticeId,
                  applyId,
                  status,
                  token,
                );
                location.reload();
              },
              () => {},
            ]}
            message={message}
            minWidth='29.8rem'
            maxWidth='29.8rem'
            buttonText={['아니오', '예']}
            handleModal={handleModal}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default ApplyTable;
