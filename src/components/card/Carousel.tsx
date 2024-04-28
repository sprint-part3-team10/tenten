'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(6000);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1199px)').matches) {
      if (React.Children.count(children) <= 2) return;
    } else if (React.Children.count(children) <= 3) return;

    const interval = setInterval(() => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setCurrentIndex(prevIndex =>
          prevIndex ===
          React.Children.count(children) -
            Math.floor(React.Children.count(children) / 2) -
            1
            ? 0
            : prevIndex + 1,
        );
      } else if (window.matchMedia('(max-width: 1199px)').matches) {
        setCurrentIndex(prevIndex =>
          prevIndex === React.Children.count(children) - 2 ? 0 : prevIndex + 1,
        );
      } else {
        setCurrentIndex(prevIndex =>
          prevIndex === React.Children.count(children) - 3 ? 0 : prevIndex + 1,
        );
      }
    }, time);

    return () => clearInterval(interval);
  }, [children, time]);

  useEffect(() => {
    if (carouselInnerRef.current) {
      if (window.matchMedia('(max-width: 768px)').matches) {
        carouselInnerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      } else if (window.matchMedia('(max-width: 1199px)').matches) {
        carouselInnerRef.current.style.transform = `translateX(-${currentIndex * 50}%)`;
      } else {
        carouselInnerRef.current.style.transform = `translateX(-${currentIndex * 33.8}%)`;
      }
    }

    if (currentIndex === React.Children.count(children) - 3) setTime(8000);
    else setTime(6000);
  }, [currentIndex]);

  return (
    <div ref={carouselInnerRef} className={styles.carousel}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}

export default Carousel;
