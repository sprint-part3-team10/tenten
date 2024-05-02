'use client';

import Image from 'next/image';
import shareIcon from '@/public/icons/share.svg';
import { useState } from 'react';
import styles from './Share.module.scss';

function Share() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <Image src={shareIcon} alt='공유하기' width={20} height={20} />
      {isOpen && (
        <ul className={styles.list}>
          <li>URL 복사</li>
          <li>카카오톡</li>
          <li>페이스북</li>
        </ul>
      )}
    </div>
  );
}

export default Share;
