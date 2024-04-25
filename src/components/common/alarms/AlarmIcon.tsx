'use client';

import alarmsRead from '@/public/icons/alarmsRead.svg';
import alarmsNotRead from '@/public/icons/alarmsNotRead.svg';
import { useEffect, useRef, useState } from 'react';
import getAlarms from '@/src/api/getAlarms';
import Image from 'next/image';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import classNames from 'classnames';
import Alarms from './Alarms';
import styles from './AlarmIcon.module.scss';

export default function AlarmIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [unRead, setUnRead] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleOpenAlarms = () => {
    setIsOpen(true);
  };

  useOutsideClick(ref, handleCloseClick);

  const alarmIcon = unRead ? alarmsNotRead : alarmsRead;

  useEffect(() => {
    const getUnread = async () => {
      const { items } = await getAlarms('066f080c-5265-4b70-836e-0f1360b57010');
      const count = items.filter(item => item.item.read === false).length;
      setUnRead(count);
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
        <Alarms handleCloseClick={handleCloseClick} />
      </div>
    </div>
  );
}
