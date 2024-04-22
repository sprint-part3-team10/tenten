import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  labelName: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function TextArea({
  labelName,
  register,
  value,
  onChange,
  error,
}: TextAreaProps) {
  return (
    <div className={styles.textAreaBox}>
      <label htmlFor={labelName}>{labelName}</label>
      <textarea
        className={styles.textArea}
        placeholder='자기 소개를 입력해 주세요.'
        value={value}
        {...register}
        onChange={onChange}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
}
