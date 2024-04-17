import styles from './Button.module.scss';

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  size: 'L' | 'M' | 'S';
};

export default function ({ buttonType, text, size }: ButtonProps) {
  const styleSize = `button${size}`;
  return (
    <button className={styles[styleSize]} type={buttonType}>
      {text}
    </button>
  );
}
