'use client';

import alarmsRead from '@/public/icons/alarmsRead.svg';
import alarmsNotRead from '@/public/icons/alarmsNotRead.svg';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import Alarms from '@/src/components/common/Alarms';
import classNames from 'classnames';
import getAlarms from '@/src/api/getAlarms';
import styles from './AlarmSet.module.scss';

export default function AlarmSet() {
  const userId = '066f080c-5265-4b70-836e-0f1360b57010';

  const [isOpen, setIsOpen] = useState(false);
  const [unRead, setUnRead] = useState(0);
  const [alarms, setAlarms] = useState([]);

  const alarmIcon = unRead ? alarmsNotRead : alarmsRead;
  const ref = useRef<HTMLDivElement>(null);

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleOpenAlarms = () => {
    setIsOpen(true);
  };

  useOutsideClick(ref, handleCloseClick);

  useEffect(() => {
    const getUnread = async () => {
      const { items } = await getAlarms(userId);
      const count = items.map(item => item.read === false).length;
      setUnRead(count);
      setAlarms([...items]);
    };
    getUnread();
  }, [unRead]);

  return (
    <div className={styles.button}>
      <div onClick={handleOpenAlarms}>
        <Image src={alarmIcon} width={24} height={24} alt='알람확인아이콘' />
      </div>
      <div
        className={classNames(styles.alarms, {
          [styles.closeAlarm]: !isOpen,
        })}
        ref={ref}
      >
        <Alarms
          handleCloseClick={handleCloseClick}
          unRead={unRead}
          alarms={alarms}
        />
      </div>
    </div>
  );
}
