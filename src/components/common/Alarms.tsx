import approve from '@/public/icons/approve.svg';
import reject from '@/public/icons/reject.svg';
import Image from 'next/image';
import { formatDateAndTime } from '@/src/lib/format';
import { STATUS_LABEL } from '@/src/constants/constant';
import classNames from 'classnames';
import styles from './Alarms.module.scss';

const mockData = {
  count: 6,
  items: {
    item: {
      id: '99996477-82db-4bda-aae1-4044f11d9a8b',
      result: 'accepted',
      createdAt: '1분',
      read: false,
    },
    shop: {
      item: {
        name: '해피 버거',
      },
    },
    notice: {
      item: {
        startsAt: '2023-07-07T18:00:00.000Z',
        workhour: 10,
      },
    },
  },
};

export default function Alarms() {
  const status = mockData.items.item.result;
  const alarmImage = status === 'accepted' ? approve : reject;
  const resultAlarm = STATUS_LABEL[status].split(' ')[0];
  const timeAlarm = formatDateAndTime(
    mockData.items.notice.item.startsAt,
    mockData.items.notice.item.workhour,
  ).split('(')[0];
  const isRead = mockData.items.item.read;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>알림 {mockData.count}개</h1>

      <div className={styles.notiBox}>
        {!isRead && (
          <Image width={5} height={5} src={alarmImage} alt='알림아이콘' />
        )}
        <div className={styles.alarmMention}>
          {mockData.items.shop.item.name}({timeAlarm})공고 지원이{' '}
          <span
            className={classNames({
              [styles.accepted]: resultAlarm === '승인',
              [styles.rejected]: resultAlarm === '거절',
            })}
          >
            {resultAlarm}
          </span>
          되었어요.
        </div>
        <div className={styles.created}>{mockData.items.item.createdAt} 전</div>
      </div>

      <div className={styles.notiBox}>
        {!isRead && (
          <Image width={5} height={5} src={alarmImage} alt='알림아이콘' />
        )}
        <div className={styles.alarmMention}>
          {mockData.items.shop.item.name}({timeAlarm})공고 지원이{' '}
          <span
            className={classNames({
              [styles.accepted]: resultAlarm === '승인',
              [styles.rejected]: resultAlarm === '거절',
            })}
          >
            {resultAlarm}
          </span>
          되었어요.
        </div>
        <div className={styles.created}>{mockData.items.item.createdAt} 전</div>
      </div>
    </div>
  );
}
