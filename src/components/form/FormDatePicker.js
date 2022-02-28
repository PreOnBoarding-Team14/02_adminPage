import { DatePicker } from 'antd';
import moment from 'moment';

export default function FormDatePicker({ attr }) {
  const {
    title,
    disabled,
    type,
    isRange,
    onChange,
    start,
    onEndDateChange,
    end,
  } = attr;
  const getShowTimeOption = (type) => (type === 'date' ? false : true);
  const getFormat = (type) =>
    type === 'time' ? 'YYYY-MM-DD hh:mm' : 'YYYY-MM-DD';
  return (
    <>
      <label style={{ marginRight: '20px' }}>{title}</label>
      <DatePicker
        disabled={disabled}
        onChange={onChange}
        showTime={getShowTimeOption(type)}
        disabledDate={(current) => {
          if (!start && !end) {
            return;
          }
          return (current && current < moment(start)) || current > moment(end);
        }}
        format={getFormat(type)}
        defaultValue={moment()}
      />
      {isRange ? (
        <>
          ~
          <DatePicker
            disabledDate={(current) => {
              if (!start && !end) {
                return;
              }
              return (
                (current && current < moment(start)) || current > moment(end)
              );
            }}
            disabled={disabled}
            onChange={onEndDateChange}
            showTime={getShowTimeOption(attr.type)}
            format={getFormat(attr.type)}
            defaultValue={moment()}
          />
        </>
      ) : null}
    </>
  );
}
