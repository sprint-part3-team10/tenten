'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import downArrow from '@/public/icons/dropdown-down.svg';
import upArrow from '@/public/icons/dropdown-up.svg';
import useOutsideClick from '@/src/hooks/useOutsideClick';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  id?: string;
  name?: string;
  width?: string;
  optionList: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown({
  id,
  name,
  width = '100%',
  optionList,
  value,
  setValue,
}: DropdownProps) {
  const [isSelecting, setIsSelecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => {
    setIsSelecting(false);
  };

  useOutsideClick(ref, handleOutsideClick);

  const toggleDropDown = () => {
    setIsSelecting(prevValue => !prevValue);
  };

  const handleOptionClick = (option: string) => {
    setValue(option);
    setIsSelecting(false);
  };

  return (
    <div
      ref={ref}
      className={styles.dropdownContainer}
      style={{
        width: width,
      }}
    >
      <div className={styles.inputBox} onClick={toggleDropDown}>
        {id && <label htmlFor={id}>{name} *</label>}
        <input
          className={classNames(styles.input, {
            [styles.onlyFilterInput]: !id,
          })}
          id={id}
          name={name}
          value={value}
          placeholder='선택'
          readOnly
        />
        <Image
          className={classNames(styles.arrow, {
            [styles.onlyFilterArrow]: !id,
          })}
          src={isSelecting ? upArrow : downArrow}
          alt='방향화살표'
        />
      </div>
      {isSelecting && (
        <ul
          className={classNames(styles.selectList, {
            [styles.onlyFilterList]: !id,
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
