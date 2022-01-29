import { DatePicker } from 'antd';
import moment from 'moment';

export default function FormDatePicker({ attr }) {
  const { title, disabled, type, isRange, onChange } = attr;
  const getShowTimeOption = (type) => (type === 'date' ? false : true);
  const getFormat = (type) =>
    type === 'time' ? 'YYYY-MM-DD hh:mm' : 'YYYY-MM-DD';

  return (
    <>
      <label>{title}</label>
      <DatePicker
        disabled={disabled}
        onChange={onChange}
        showTime={getShowTimeOption(type)}
        format={getFormat(type)}
        defaultValue={moment()}
      />
      {isRange ? (
        <>
          ~
          <DatePicker
            disabled={disabled}
            onChange={onChange}
            showTime={getShowTimeOption(type)}
            format={getFormat(type)}
            defaultValue={moment()}
          />
        </>
      ) : null}
    </>
  );
}
