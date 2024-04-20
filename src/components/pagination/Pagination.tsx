'use client';

import { useState } from 'react';
import rightArrowIcon from '@/public/icons/rightArrow.svg';
import leftArrowIcon from '@/public/icons/leftArrow.svg';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './Pagination.module.scss';

// limit, section, 요청 보낼 url, response 받을 배열, 배열에 set하는 함수
function Pagination() {
  const totalCount = 100; // 전체 아이템
  const limit = 6; // 보여줄 item 갯수
  const totalPages = Math.ceil(totalCount / limit); // 나올 페이지 수
  const sectionSize = 7; // 한 번에 보여줄 페이지 수
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => ++i);
  const sectionPageNumbers = []; // 섹션별 페이지 배열을 담을 배열
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedSection, setSelectedSection] = useState(0);

  for (let i = 0; i < Math.ceil(totalPages / sectionSize); i++) {
    // 페이지 수를 섹션 단위로 나누어 반복
    const startIndex = i * sectionSize; // 현재 섹션의 시작 인덱스
    const endIndex = Math.min(startIndex + sectionSize, totalPages); // 현재 섹션의 끝 인덱스
    const sectionPages = pageNumbers.slice(startIndex, endIndex); // 현재 섹션에 해당하는 페이지 번호 배열
    sectionPageNumbers.push(sectionPages); // 현재 섹션의 페이지 배열을 섹션별 배열에 추가
  }

  const handleClickNumber = (num: number) => {
    setSelectedPage(num);
    console.log(selectedPage);
  };

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      setSelectedSection(prev => {
        if (prev > 0) {
          const newSection = prev - 1;
          setSelectedPage(newSection * sectionSize + 1);
          return newSection;
        }
        setSelectedPage(1);
        return prev;
      });
    } else if (direction === 'right') {
      setSelectedSection(prev => {
        if (prev < sectionPageNumbers.length - 1) {
          const newSection = prev + 1;
          setSelectedPage(newSection * sectionSize + 1);
          return newSection;
        }
        setSelectedPage(totalPages);
        return prev;
      });
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
          {sectionPageNumbers[selectedSection].map(num => (
            <p
              key={num}
              className={classNames(styles.number, {
                [styles.selected]: selectedPage === num,
              })}
              onClick={() => handleClickNumber(num)}
            >
              {num}
            </p>
          ))}
        </div>
      </div>
      <span onClick={() => handleArrowClick('right')}>
        <Image
          className={classNames({
            [styles.hidden]: selectedSection === sectionPageNumbers.length - 1,
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
