'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import warningIcon from '@/public/icons/modalWarning.svg';
import checkIcon from '@/public/icons/modalCheck.svg';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import classNames from 'classnames';
import Button from '../Button';
import styles from './Modal.module.scss';

interface ModalProps {
  icon?: 'warning' | 'check';
  message: string;
  minWidth: string;
  maxWidth: string;
  buttonText: [string] | [string, string];
  handleButton: [(e: Event) => void] | [(e: Event) => void, (e: Event) => void];
  buttonWidthPercent?: string;
  buttonColorChange?: boolean;
  bottomRightButton?: boolean;
  handleModal: (value: boolean) => void;
}

/**
 * 모달 컴포넌트
 * @param props
 * @param props.icon 모달에 체크나 느낌표 아이콘을 띄울지 여부
 * @param {string} props.message 모달 메세지
 * @param {string} props.minWidth 모달 최소 크기
 * @param {string} props.maxWidth 모달 최대 크기
 * @param {array} props.buttonText 버튼에 쓸 글자를 배열로 전달. 배열 길이에 따라 버튼 갯수가 정해집니다 (두 개까지)
 * @param {string} props.buttonWidthPercent 버튼 가로 길이. 패딩을 제외한 모달 길이의 백분율로 정해주세요. ex) 25%
 * @param {boolean} props.buttonColorChange 버튼 색을 주황, 하양으로 변경.
 * @param {boolean} props.bottomRightButton 버튼을 우하단에 배치하고 싶으면 불리언 값을 전달해주세요.
 * @param props.handleModal 클릭 시 닫히도록 할 setState 함수
 * @returns
 */

function Modal({
  icon,
  message,
  minWidth,
  maxWidth,
  buttonText = ['닫기'],
  handleButton = [() => {}],
  buttonWidthPercent = '35%',
  bottomRightButton = false,
  buttonColorChange = false,
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

  useEffect(() => {
    const bodyQuery = document.querySelector('body');

    if (bodyQuery) {
      bodyQuery.style.overflow = 'hidden';
    }

    return () => {
      if (bodyQuery) {
        bodyQuery.style.overflow = 'unset';
      }
    };
  }, []);

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
        <div
          className={classNames(styles.buttonContainer, {
            [styles.bottomRight]: bottomRightButton,
          })}
        >
          {buttonText.length === 2 && (
            <div onClick={handleClick} style={buttonContainerStyle}>
              <Button
                buttonType='button'
                text={buttonText[0]}
                size='M'
                isWhite={!buttonColorChange}
                onClick={handleButton[0] as () => void}
              />
            </div>
          )}
          <div onClick={handleClick} style={buttonContainerStyle}>
            <Button
              buttonType='button'
              text={buttonText[1] || buttonText[0]}
              size='M'
              isWhite={buttonColorChange}
              onClick={
                (handleButton[1] as () => void) ||
                (handleButton[0] as () => void)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
