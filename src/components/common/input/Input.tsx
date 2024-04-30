'use client';

import classNames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  inputType?: 'text' | 'password' | 'number';
  value?: string | number;
  placeholder?: string;
  width?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export default function Input({
  label,
  inputType = 'text',
  value,
  placeholder = '입력',
  width = '100%',
  error,
  register,
  onChange = undefined,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isError: boolean = !!error;

  if (inputType === 'password') {
    if (isVisible) {
      inputType = 'text';
    }
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.inputContainer} style={{ width }}>
      <label className={styles.label} htmlFor={inputType}>
        {label}
      </label>
      <div
        className={classNames(styles.inputBox, {
          [styles.inputBoxError]: isError,
        })}
      >
        {onChange ? (
          <input
            className={classNames(styles.input, {
              [styles.inputBoxError]: isError,
            })}
            type={inputType}
            value={value}
            placeholder={placeholder}
            {...register}
            onChange={onChange}
            onKeyDown={e => {
              if (
                inputType === 'number' &&
                (e.key === 'ArrowUp' || e.key === 'ArrowDown')
              ) {
                e.preventDefault();
              }
            }}
          />
        ) : (
          <input
            className={classNames(styles.input, {
              [styles.inputBoxError]: isError,
            })}
            type={inputType}
            value={value}
            placeholder={placeholder}
            {...register}
            onKeyDown={e => {
              if (
                inputType === 'number' &&
                (e.key === 'ArrowUp' || e.key === 'ArrowDown')
              ) {
                e.preventDefault();
              }
            }}
          />
        )}
        {(label === '비밀번호' || label === '비밀번호 확인') && (
          <button
            type='button'
            onClick={toggleVisibility}
            className={styles.eye}
            tabIndex={-1}
          >
            {isVisible ? (
              <Image
                src='icons/eyeon.svg'
                width={16}
                height={16}
                alt='비밀번호 보기'
                priority
              />
            ) : (
              <Image
                src='icons/eyeoff.svg'
                width={16}
                height={16}
                alt='비밀번호 숨기기'
                priority
              />
            )}
          </button>
        )}
        {(label.includes('시급') || label.includes('금액')) && (
          <span className={styles.won}>원</span>
        )}
        {label.includes('시간') && <span className={styles.won}>시간</span>}
      </div>

      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
}
