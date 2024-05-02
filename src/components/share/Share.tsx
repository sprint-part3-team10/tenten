'use client';

import Image from 'next/image';
import shareIcon from '@/public/icons/share.svg';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './Share.module.scss';
import Toast from '../common/toast/Toast';

function Share() {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.button} onClick={handleClick}>
        <Image src={shareIcon} alt='공유하기' width={20} height={20} />
        {isOpen && (
          <ul className={styles.list}>
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => {
                setToast(true);
                setTimeout(() => {
                  setToast(false);
                }, 1700);
              }}
            >
              <li>URL 복사</li>
            </CopyToClipboard>
            <li>카카오톡</li>
            <li>페이스북</li>
          </ul>
        )}
      </div>
      {toast && <Toast message='URL이 복사되었습니다.' />}
    </>
  );
}

export default Share;
