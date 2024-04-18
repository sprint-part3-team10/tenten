import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  size?: 'L' | 'M' | 'S' | '';
  widthValue?: string;
  isWhite?: boolean;
  isDisable?: boolean;
}

export default function Button({
  buttonType,
  text,
  size = '',
  widthValue = '100%',
  isWhite = false,
  isDisable = false,
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
      style={{ width: widthValue }}
    >
      {text}
    </button>
  );
}
