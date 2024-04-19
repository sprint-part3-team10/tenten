'use client';

import Image from 'next/image';
import { useRef } from 'react';
import styles from './Modal.module.scss';
import warningIcon from '@/public/icons/modalWarning.svg';
import checkIcon from '@/public/icons/modalCheck.svg';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import Button from '../Button';
import { min } from 'date-fns';

interface ModalProps {
  icon?: 'warning' | 'check';
  message: string;
  minWidth: string;
  maxWidth: string;
  buttonText: [string] | [string, string];
  buttonWidthPercent?: string;
  handleModal: (value: boolean) => void;
}

/**
 * 모달 컴포넌트
 * @param props
 * @param props.icon 모달에 체크나 느낌표 아이콘을 띄울지 여부
 * @param {string} props.message 모달 메세지
 * @param {array} props.buttonText 버튼에 쓸 글자를 배열로 전달. 배열 길이에 따라 버튼 갯수가 정해집니다 (두 개까지)
 * @param {string} props.buttonWidthPercent 버튼 가로 길이. 패딩을 제외한 모달 길이의 백분율로 정해주세요. ex) 25%
 * @param props.handleModal 클릭 시 닫히도록 할 setState 함수
 * @returns
 */

function Modal({
  icon,
  message,
  minWidth,
  maxWidth,
  buttonText = ['닫기'],
  buttonWidthPercent = '35%',
  handleModal,
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const iconSelector = {
    warning: warningIcon,
    check: checkIcon,
  };

  const modalBoxStyle = {
    minWidth,
    maxWidth,
  };
  const buttonContainerStyle = {
    flexBasis: buttonWidthPercent,
  };

  const handleClick = () => {
    handleModal(false);
  };

  useOutsideClick(ref, handleClick);

  return (
    <div className={styles.background}>
      <div ref={ref} className={styles.box} style={modalBoxStyle}>
        {icon && (
          <Image
            className={styles.icon}
            width={24}
            height={24}
            src={iconSelector[icon]}
            alt='모달 내부 아이콘'
          />
        )}
        <div className={styles.message}>{message}</div>
        <div className={styles.buttonContainer}>
          {buttonText.length === 2 && (
            <div onClick={handleClick} style={buttonContainerStyle}>
              <Button
                buttonType='button'
                text={buttonText[0]}
                size='M'
                isWhite
              />
            </div>
          )}
          <div onClick={handleClick} style={buttonContainerStyle}>
            <Button
              buttonType='button'
              text={buttonText[1] || buttonText[0]}
              size='M'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  icon: undefined,
};

export default Modal;
