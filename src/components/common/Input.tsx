import styles from './Input.module.scss';

type InputProps = {
  label: string;
  name: string;
  inputType: string;
  value: string;
  onChange: any;
  isError?: boolean;
  errorMessage?: string;
};

export default function Input({
  label,
  name,
  inputType,
  value,
  onChange,
  isError,
  errorMessage,
}: InputProps) {
  return (
    <>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>{label}</p>
        {isError ? (
          <input
            className={styles.inputBoxError}
            name={name}
            value={value}
            type={inputType}
            onChange={onChange}
          />
        ) : (
          <input
            className={styles.inputBox}
            name={name}
            value={value}
            type={inputType}
            onChange={onChange}
          />
        )}

        {isError && <div className={styles.error}>{errorMessage}</div>}
      </div>
    </>
  );
}
