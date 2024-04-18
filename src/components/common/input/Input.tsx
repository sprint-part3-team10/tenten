import classNames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  inputType?: 'text' | 'email' | 'password';
  value?: string | number;
  error?: FieldError;
  register: UseFormRegisterReturn;
  isStatic?: boolean;
}

export default function Input({
  label,
  inputType,
  value,
  error,
  register,
  isStatic = true,
}: InputProps) {
  const isError: boolean = !!error;
  return (
    <div className={styles.inputContainer} isStatic={isStatic}>
      <label className={styles.label} htmlFor={inputType}>
        {label}
      </label>
      <input
        className={classNames(styles.inputBox, {
          [styles.inputBoxError]: isError,
        })}
        type={inputType}
        value={value}
        placeholder='입력'
        {...register}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
}
