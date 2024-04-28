import Image from 'next/image';
import CHECK from '@/public/icons/circleChecked.svg';
import NOTCHECKED from '@/public/icons/circleNotChecked.svg';
import styles from './TypeSelector.module.scss';

interface TypeSelectorProps {
  label: string;
  onChange: () => void;
  isEmployer: boolean;
}

function ToggleButton(selected: boolean, text: string, onChange: () => void) {
  const circleSrc = selected ? CHECK : NOTCHECKED;
  const altText = selected ? '선택' : '선택하지 않음';
  const buttonStyle = selected ? styles.select : styles.notSelect;

  return (
    <button
      className={buttonStyle}
      onClick={!selected ? onChange : undefined}
      disabled={selected}
    >
      <Image
        className={styles.circle}
        src={circleSrc}
        alt={altText}
        width={20}
        height={20}
        priority
      />
      {text}
    </button>
  );
}

export default function TypeSelector({
  label,
  onChange,
  isEmployer,
}: TypeSelectorProps) {
  return (
    <div className={styles.selectToggle}>
      <p className={styles.label}>{label}</p>
      <div className={styles.toggles}>
        {ToggleButton(isEmployer, '알바생', onChange)}
        {ToggleButton(!isEmployer, '사장님', onChange)}
      </div>
    </div>
  );
}
