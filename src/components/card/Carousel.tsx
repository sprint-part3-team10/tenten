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
    if (React.Children.count(children) <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === React.Children.count(children) - 3 ? 0 : prevIndex + 1,
      );
    }, time);

    return () => clearInterval(interval);
  }, [children, time]);

  useEffect(() => {
    if (carouselInnerRef.current) {
      carouselInnerRef.current.style.transform = `translateX(-${currentIndex * 33.8}%)`;
    }

    if (currentIndex === 5) setTime(8000);
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
