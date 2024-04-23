import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  size?: 'L' | 'M' | 'S' | '';
  width?: string;
  isWhite?: boolean;
  isDisable?: boolean;
  onClick?: () => void;
}

export default function Button({
  buttonType,
  text,
  size = '',
  width = '100%',
  isWhite = false,
  isDisable = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.commonButton,
        { [styles.white]: isWhite },
        { [styles[size]]: size },
      )}
      type={buttonType}
      disabled={isDisable}
      style={{ width }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
