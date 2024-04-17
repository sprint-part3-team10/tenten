import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  size?: 'L' | 'M' | 'S' | '';
  isWhite?: boolean;
  isDisable?: boolean;
}

export default function ({
  buttonType,
  text,
  size = '',
  isWhite = false,
  isDisable = false,
}: ButtonProps) {
  let styleSize: string;
  if (isWhite) {
    styleSize = size ? `button${size}White` : 'commonButtonWhite';
  } else {
    styleSize = size ? `button${size}` : 'commonButton';
  }

  return (
    <button
      className={styles[styleSize]}
      type={buttonType}
      disabled={isDisable}
    >
      {text}
    </button>
  );
}
