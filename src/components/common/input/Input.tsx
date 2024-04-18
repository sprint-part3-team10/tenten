import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  name: string;
  inputType: string;
  value: string;
  preContent: string;
  onChange: any;
  isError?: boolean;
  errorMessage?: string;
}

export default function Input({
  label,
  name,
  inputType,
  value,
  preContent = '입력',
  onChange,
  isError,
  errorMessage,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={classNames(styles.inputBox, {
          [styles.inputBoxError]: isError,
        })}
        name={name}
        value={value}
        placeholder={preContent}
        type={inputType}
        onChange={onChange}
      />
      {isError && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
}
