import { useState } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import classNames from 'classnames';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  labelName: string;
  textLimit: number;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function TextArea({
  labelName,
  textLimit,
  placeholder,
  register,
  value,
  onChange,
  error,
}: TextAreaProps) {
  const [textLength, setTextLength] = useState(0);
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textLength <= textLimit) {
      onChange(event);
      const slicedTextLength = event.target.value.slice(0, textLimit).length;
      setTextLength(slicedTextLength);
    }
  };
  const isTextLengthOver = textLength === textLimit;
  return (
    <div className={styles.textAreaBox}>
      <label htmlFor={labelName}>{labelName}</label>
      <textarea
        className={classNames(styles.textArea, {
          [styles.errorBox]: !!error,
        })}
        placeholder={placeholder}
        maxLength={textLimit}
        value={value}
        {...register}
        onChange={handleOnChange}
      />
      <div className={styles.textLimit}>
        <p>
          (
          <span className={`${isTextLengthOver ? styles.textLengthOver : ''}`}>
            {` ${textLength} `}
          </span>
          / {`${textLimit} `})
        </p>
      </div>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
}
