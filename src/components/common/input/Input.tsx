'use client';

import classNames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface InputProps {
  label: string;
  inputType?: 'email' | 'text' | 'password';
  value?: string | number;
  placeholder?: string;
  width?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  inputType = 'text',
  value,
  placeholder = '입력',
  width = '100%',
  error,
  register,
  onChange,
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
    <div className={styles.inputContainer} style={{ width: width }}>
      <label className={styles.label} htmlFor={inputType}>
        {label}
      </label>
      <div
        className={classNames(styles.inputBox, {
          [styles.inputBoxError]: isError,
        })}
      >
        <input
          className={classNames(styles.input, {
            [styles.inputBoxError]: isError,
          })}
          type={inputType}
          value={value}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
        />
        {(label === '비밀번호' || label === '비밀번호 확인') && (
          <button
            type='button'
            onClick={toggleVisibility}
            className={styles.eye}
          >
            {isVisible ? (
              <Image
                src='icons/eyeon.svg'
                width={16}
                height={16}
                alt='비밀번호 보기'
              />
            ) : (
              <Image
                src='icons/eyeoff.svg'
                width={16}
                height={16}
                alt='비밀번호 숨기기'
              />
            )}
          </button>
        )}
        {(label === '시급*' || label === '금액') && (
          <span className={styles.won}>원</span>
        )}
      </div>

      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
}
