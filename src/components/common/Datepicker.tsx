import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FieldError } from 'react-hook-form';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.scss';

interface DatePickerProps {
  value?: Date | undefined;
  onChange: (date: Date) => void | undefined;
  timeSelect?: boolean;
  width?: string;
  error?: FieldError;
}

const DatePicker = forwardRef<any, DatePickerProps>((props, ref) => {
  const { value, onChange, timeSelect, error, width = '100%' } = props;

  const pickerBoxStyle = {
    width,
    ...(error
      ? {
          border: '1px solid #ff4040',
          borderRadius: '0.6rem',
        }
      : {}),
  };

  return (
    <div style={pickerBoxStyle}>
      {timeSelect ? (
        <ReactDatePicker
          ref={ref}
          dateFormat='yyyy년 MM월 dd일 aa h:mm'
          minDate={new Date()}
          selected={value}
          onChange={onChange}
          locale={ko}
          placeholderText='날짜를 선택해 주세요.'
          showPopperArrow={false}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={5}
          timeCaption='time'
        />
      ) : (
        <ReactDatePicker
          ref={ref}
          dateFormat='yyyy년 MM월 dd일'
          minDate={new Date()}
          selected={value}
          onChange={onChange}
          locale={ko}
          placeholderText='날짜를 선택해 주세요.'
          showPopperArrow={false}
        />
      )}
    </div>
  );
});

export default DatePicker;
