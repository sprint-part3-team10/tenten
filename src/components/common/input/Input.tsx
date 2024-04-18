import classNames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  inputType?: 'text' | 'email' | 'password';
  value?: string | number;
  widthValue?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  isStatic?: boolean;
}

export default function Input({
  label,
  inputType,
  value,
  widthValue = '100%',
  error,
  register,
  isStatic = true,
}: InputProps) {
  const isError: boolean = !!error;
  return (
    <div
      className={styles.inputContainer}
      isStatic={isStatic}
      style={{ width: widthValue }}
    >
      <label className={styles.label} htmlFor={inputType}>
        {label}
      </label>
      <div
        className={classNames(styles.inputBox, {
          [styles.inputBoxError]: isError,
        })}
      >
        <input
          className={classNames(styles.input, {
            [styles.inputBoxError]: isError,
          })}
          type={inputType}
          value={value}
          placeholder='입력'
          {...register}
        />
        {label === '시급*' && <span className={styles.won}>원</span>}
      </div>

      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
}
