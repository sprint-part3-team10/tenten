import Image from 'next/image';
import styles from './Modal.module.scss';
import warningIcon from '@/public/icons/modalWarning.svg';
import checkIcon from '@/public/icons/modalCheck.svg';

interface Props {
  icon: 'warning' | 'check' | null;
  message: string;
  buttonText: [string] | [string, string];
}

function Modal({ icon, message, buttonText = ['닫기'] }: Props) {
  const iconSelector = {
    warning: warningIcon,
    check: checkIcon,
  };

  return (
    <div className={styles.background}>
      <div className={styles.box}>
        {icon && (
          <Image
            width={24}
            height={24}
            src={iconSelector[icon]}
            alt='모달 내부 아이콘'
          />
        )}
        <div>{message}</div>
        <div className={styles.buttonContainer}>
          {buttonText.length === 2 && (
            <button
              className={`${styles.button} ${styles.white}`}
              type='button'
            >
              {buttonText[0]}
            </button>
          )}
          <button className={`${styles.button}`} type='button'>
            {buttonText[1] || buttonText[0]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
