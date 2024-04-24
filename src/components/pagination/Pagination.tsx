'use client';

import { useState } from 'react';
import rightArrowIcon from '@/public/icons/rightArrow.svg';
import leftArrowIcon from '@/public/icons/leftArrow.svg';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalCount: number | undefined;
  limit: number;
  selectedPage: number;
  handlePageChange: (page: number) => void;
}

function Pagination({
  totalCount,
  limit,
  selectedPage,
  handlePageChange,
}: PaginationProps) {
  const totalPages = totalCount ? Math.ceil(totalCount / limit) : 0;
  const sectionSize = 7;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => ++i);
  const sectionPageNumbers = [];
  const [selectedSection, setSelectedSection] = useState(0);

  for (let i = 0; i < Math.ceil(totalPages / sectionSize); i++) {
    const startIndex = i * sectionSize;
    const endIndex = Math.min(startIndex + sectionSize, totalPages);
    const sectionPages = pageNumbers.slice(startIndex, endIndex);
    sectionPageNumbers.push(sectionPages);
  }

  const handleClickNumber = (num: number) => {
    handlePageChange(num);
  };

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      setSelectedSection(prev => (prev > 0 ? prev - 1 : prev));
      handlePageChange(
        (Math.ceil(selectedPage / sectionSize) - 2) * sectionSize + 1,
      );
    } else if (direction === 'right') {
      setSelectedSection(prev =>
        prev < sectionPageNumbers.length - 1 ? prev + 1 : prev,
      );
      handlePageChange(Math.ceil(selectedPage / sectionSize) * sectionSize + 1);
    }
  };

  return (
    <div className={styles.container}>
      <span onClick={() => handleArrowClick('left')}>
        <Image
          className={classNames({
            [styles.hidden]: selectedSection === 0,
          })}
          src={leftArrowIcon}
          alt='왼쪽 화살표'
          width={20}
          height={20}
        />
      </span>
      <div className={styles.numberContainer}>
        <div className={styles.section}>
          {sectionPageNumbers[selectedSection] ? (
            sectionPageNumbers[selectedSection].map(num => (
              <p
                key={num}
                className={classNames(styles.number, {
                  [styles.selected]: selectedPage === num,
                })}
                onClick={() => handleClickNumber(num)}
              >
                {num}
              </p>
            ))
          ) : (
            <p className={classNames(styles.number, styles.selected)}>1</p>
          )}
        </div>
      </div>
      <span onClick={() => handleArrowClick('right')}>
        <Image
          className={classNames({
            [styles.hidden]:
              selectedSection === sectionPageNumbers.length - 1 ||
              sectionPageNumbers.length === 1,
          })}
          src={rightArrowIcon}
          alt='오른쪽 화살표'
          width={20}
          height={20}
        />
      </span>
    </div>
  );
}

export default Pagination;
