import approveIcon from '@/public/icons/approve.svg';
import rejectIcon from '@/public/icons/reject.svg';
import cancelIcon from '@/public/icons/cancel.svg';
import Image from 'next/image';
import { formatDateAndTime } from '@/src/lib/format';
import { STATUS_LABEL } from '@/src/constants/constant';
import classNames from 'classnames';
import close from '@/public/icons/close.svg';
import { getFromTime } from '@/src/lib/caculate';
import styles from './Alarms.module.scss';

interface AlarmsProps {
  handleCloseClick: () => void;
  unRead: number;
  alarms: {
    item: {
      application: {
        item: {
          status: string;
          id: string;
        };
      };
      createdAt: string;
      notice: {
        item: {
          startsAt: string;
          workhour: number;
        };
      };
      read: boolean;
      shop: {
        item: {
          name: string;
        };
      };
    };
  }[];
}

export default function Alarms({
  handleCloseClick,
  unRead,
  alarms,
}: AlarmsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={handleCloseClick}>
        <Image width={24} height={24} src={close} alt='close' />
      </button>
      <h1 className={styles.title}>알림 {unRead}개</h1>
      <div className={styles.notiContainer}>
        {alarms.map(alarm => {
          const { status } = alarm.item.application.item;
          let alarmImage;
          if (status === 'accepted') alarmImage = approveIcon;
          else if (status === 'rejected') alarmImage = rejectIcon;
          else if (status === 'canceled') alarmImage = cancelIcon;
          const resultAlarm = STATUS_LABEL[status]?.split(' ')[0];
          const timeAlarm = formatDateAndTime(
            alarm.item.notice.item.startsAt,
            alarm.item.notice.item.workhour,
          ).split('(')[0];
          const isRead = alarm.item.read;

          return (
            <div
              className={styles.notiBox}
              key={alarm.item.application.item.id}
            >
              {!isRead && (
                <Image width={5} height={5} src={alarmImage} alt='알림아이콘' />
              )}
              <div className={styles.alarmMention}>
                {alarm.item.shop.item.name}({timeAlarm}) 공고 지원이{' '}
                <span
                  className={classNames({
                    [styles.accepted]: resultAlarm === '승인',
                    [styles.rejected]: resultAlarm === '거절',
                    [styles.canceled]: resultAlarm === '취소',
                  })}
                >
                  {resultAlarm}
                </span>
                되었어요.
              </div>
              <div className={styles.created}>
                {getFromTime(alarm.item.createdAt)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
