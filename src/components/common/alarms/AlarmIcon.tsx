'use client';

import alarmsRead from '@/public/icons/alarmsRead.svg';
import alarmsNotRead from '@/public/icons/alarmsNotRead.svg';
import { useEffect, useRef, useState } from 'react';
import getAlarms from '@/src/api/getAlarms';
import Image from 'next/image';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import classNames from 'classnames';
import close from '@/public/icons/close.svg';
import styles from './AlarmIcon.module.scss';
import AlarmContainer from './AlarmContainer';

interface AlarmIconProps {
  userId: string;
  token: string;
  userType: string;
}

export default function AlarmIcon({ userId, token, userType }: AlarmIconProps) {
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
      const { items } = await getAlarms(userId, token);
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
        <div className={styles.container}>
          <button className={styles.close} onClick={handleCloseClick}>
            <Image width={24} height={24} src={close} alt='close' />
          </button>
          <AlarmContainer userId={userId} token={token} userType={userType} />
        </div>
      </div>
    </div>
  );
}
