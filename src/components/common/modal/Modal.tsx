'use client';

import Image from 'next/image';
import { useRef } from 'react';
import styles from './Modal.module.scss';
import warningIcon from '@/public/icons/modalWarning.svg';
import checkIcon from '@/public/icons/modalCheck.svg';
import useOutsideClick from '@/src/hooks/useOutsideClick';

interface ModalProps {
  icon: 'warning' | 'check' | null;
  message: string;
  buttonText: [string] | [string, string];
  setModalOpen: (value: boolean) => void;
}

/**
 * 모달 컴포넌트
 * @param icon 모달에 체크나 느낌표 아이콘을 띄울지 여부
 * @param {string} message 모달 메세지
 * @param {array} buttonText 버튼에 쓸 글자를 배열로 전달. 배열 길이에 따라 버튼 갯수가 정해집니다 (두 개까지)
 * @param setModalOpen 클릭 시 닫히도록 할 setState 함수
 * @returns
 */

function Modal({
  icon,
  message,
  buttonText = ['닫기'],
  setModalOpen,
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const iconSelector = {
    warning: warningIcon,
    check: checkIcon,
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useOutsideClick(ref, handleClose);

  return (
    <div className={styles.background}>
      <div ref={ref} className={styles.box}>
        {icon && (
          <Image
            width={24}
            height={24}
            src={iconSelector[icon]}
            alt='모달 내부 아이콘'
          />
        )}
        <div>{message}</div>
        <div className={styles.buttonContainer}>
          {buttonText.length === 2 && (
            <button
              className={`${styles.button} ${styles.white}`}
              type='button'
            >
              {buttonText[0]}
            </button>
          )}
          <button
            className={`${styles.button}`}
            type='button'
            onClick={handleClose}
          >
            {buttonText[1] || buttonText[0]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
