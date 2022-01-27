import { DatePicker } from 'antd';

export default function FormDatePicker({ attr }) {
  /*
		attr 에는 필요한 속성들 넣기
		ex) initialValue, onClick, onFocus, label, title etc..

		Date type : 날짜와 시간 둘 다 표기하는 경우, 날짜만 표기하는 경우
	*/
  const { title, disabled, type, onChange } = attr;
  const getShowTimeOption = (type) => (type === 'date' ? false : true);

  return (
    <>
      <label>{title}</label>
      <DatePicker
        disabled={disabled}
        onChange={onChange}
        showTime={getShowTimeOption(type)}
      />
      {attr.isRange ? (
        <>
          ~
          <DatePicker disabled={disabled} onChange={onChange} showTime={type} />
        </>
      ) : null}
    </>
  );
}
