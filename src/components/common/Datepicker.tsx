import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  width?: string;
}

export default function DatePicker({
  value,
  onChange,
  width = '100%',
}: DatePickerProps) {
  return (
    <div
      style={{
        width: width,
      }}
    >
      <ReactDatePicker
        dateFormat='yyyy년 MM월 dd일 aa h:mm '
        minDate={new Date()}
        selected={value}
        onChange={onChange}
        locale={ko}
        showPopperArrow={false}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={5}
        timeCaption='time'
      />
    </div>
  );
}
