import styles from './Input.module.scss';

type InputProps = {
  label: string;
  name: string;
  inputType: string;
  value: string;
  preContent: string;
  onChange: any;
  isError?: boolean;
  errorMessage?: string;
};

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
    <>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        {isError ? (
          <>
            <input
              className={styles.inputBoxError}
              name={name}
              value={value}
              placeholder={preContent}
              type={inputType}
              onChange={onChange}
            />
          </>
        ) : (
          <>
            <input
              className={styles.inputBox}
              id={name}
              name={name}
              value={value}
              placeholder={preContent}
              type={inputType}
              onChange={onChange}
            />
          </>
        )}
        {isError && <div className={styles.error}>{errorMessage}</div>}
      </div>
    </>
  );
}
