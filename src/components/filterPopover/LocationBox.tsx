'use client';

import React, { useState } from 'react';
import { LOCATION_LIST } from '@/src/constants/dropdownList';
import styles from './LocationBox.module.scss';
import Label from '../applylist/Label';

function LocationBox() {
  const [clickedLocation, setClickedLocation] = useState<string[]>([]);

  const handleClick = (item: string) => {
    if (!clickedLocation.includes(item))
      setClickedLocation([...clickedLocation, item]);
  };

  const handleDeleteLocation = (item: string) => {
    setClickedLocation(clickedLocation.filter(prev => prev !== item));
  };

  return (
    <div>
      <div className={styles.box}>
        {LOCATION_LIST.map(item => (
          <div key={item} className={styles.location}>
            <span onClick={() => handleClick(item)}>{item}</span>
          </div>
        ))}
      </div>
      <div className={styles.labelContainer}>
        {clickedLocation.map(item => (
          <Label
            key={item}
            labelType='location'
            content={item}
            onClick={() => handleDeleteLocation(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default LocationBox;
