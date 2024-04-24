'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import downArrow from '@/public/icons/dropdown-down.svg';
import upArrow from '@/public/icons/dropdown-up.svg';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  labelName?: string;
  width?: string;
  optionList: string[];
  value: string;
  register?: UseFormRegisterReturn;
  onClick?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
}

export default function Dropdown({
  labelName,
  width = '100%',
  optionList,
  value,
  register,
  onClick,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, handleOutsideClick);

  const toggleDropDown = () => {
    setIsOpen(prevValue => !prevValue);
  };

  const handleOptionClick = (option: string) => {
    if (onClick) onClick(option);
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      className={styles.dropdownContainer}
      style={{
        width,
      }}
    >
      <div className={styles.inputBox} onClick={toggleDropDown}>
        {labelName && (
          <label className={styles.label} htmlFor={labelName}>
            {labelName}
          </label>
        )}
        <input
          className={classNames(styles.input, {
            [styles.onlyFilterInput]: !labelName,
          })}
          id={labelName}
          name={labelName}
          value={value}
          placeholder='선택'
          {...register}
          readOnly
        />
        <Image
          className={classNames(styles.arrow, {
            [styles.onlyFilterArrow]: !labelName,
          })}
          src={isOpen ? upArrow : downArrow}
          alt='방향화살표'
        />
      </div>
      {isOpen && (
        <ul
          className={classNames(styles.selectList, {
            [styles.onlyFilterList]: !labelName,
          })}
        >
          {optionList.map(option => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
