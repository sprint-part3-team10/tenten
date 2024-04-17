import Image from 'next/image';
import styles from './TypeSelector.module.scss';

type TypeSelectorProps = {
  label: string;
  onChange: any;
  isEmployer: boolean;
};

export default function TypeSelector({
  label,
  onChange,
  isEmployer,
}: TypeSelectorProps) {
  return (
    <div className={styles.selectToggle}>
      <p className={styles.label}>{label}</p>
      {isEmployer ? (
        <div className={styles.toggles}>
          <button className={styles.select} disabled>
            <Image
              className={styles.circle}
              src='/icons/circleChecked.svg'
              alt='check-check'
              width={20}
              height={20}
            />
            <Image
              className={styles.checked}
              src='/icons/checked.svg'
              alt='check-base'
              width={20}
              height={20}
            />
            알바생
          </button>
          <button className={styles.notSelect} onClick={onChange}>
            <Image
              className={styles.circle}
              src='/icons/circleNotChecked.svg'
              alt='check-not-check'
              width={20}
              height={20}
            />
            사장님
          </button>
        </div>
      ) : (
        <div className={styles.toggles}>
          <button className={styles.notSelect} onClick={onChange}>
            <Image
              src='/icons/circleNotChecked.svg'
              alt='check-not-check'
              width={20}
              height={20}
            />
            알바생
          </button>
          <button className={styles.select} disabled>
            <Image
              className={styles.circle}
              src='/icons/circleChecked.svg'
              alt='check-check'
              width={20}
              height={20}
            />
            <Image
              className={styles.checked}
              src='/icons/checked.svg'
              alt='check-base'
              width={20}
              height={20}
            />
            사장님
          </button>
        </div>
      )}
    </div>
  );
}
