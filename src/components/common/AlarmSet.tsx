'use client';

import alarmsRead from '@/public/icons/alarmsRead.svg';
import alarmsNotRead from '@/public/icons/alarmsNotRead.svg';
import { useRef, useState } from 'react';
import Image from 'next/image';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import Alarms from '@/src/components/common/Alarms';
import styles from './AlarmSet.module.scss';
import classNames from 'classnames';

export default function AlarmSet() {
  const notRead = 1;
  const alarmIcon = notRead ? alarmsNotRead : alarmsRead;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleOpenAlarms = () => {
    setIsOpen(true);
  };

  useOutsideClick(ref, handleCloseClick);

  return (
    <div className={styles.button}>
      <div onClick={handleOpenAlarms} ref={ref}>
        <Image src={alarmIcon} width={24} height={24} alt='알람확인아이콘' />
      </div>
      <div
        className={classNames(styles.alarms, {
          [styles.closeAlarm]: !isOpen,
        })}
      >
        <Alarms handleCloseClick={handleCloseClick} />
      </div>
    </div>
  );
}
