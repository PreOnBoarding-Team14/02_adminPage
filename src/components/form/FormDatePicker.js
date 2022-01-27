import { DatePicker } from 'antd';

export default function FormDatePicker({ attr }) {
  /*
		attr 에는 필요한 속성들 넣기
		ex) initialValue, onClick, onFocus, label, title etc..

		Date type : 날짜와 시간 둘 다 표기하는 경우, 날짜만 표기하는 경우
	*/
  const getShowTimeOption = (type) => (type === 'date' ? false : true);

  return (
    <>
      <label>{attr.title}</label>
      <DatePicker
        disabled={attr.disabled}
        onChange={attr.onChange()}
        showTime={getShowTimeOption(attr.type)}
      />
      {attr.isRange ? (
        <>
          ~
          <DatePicker
            disabled={attr.disabled}
            onChange={attr.onChange()}
            showTime={getShowTimeOption(attr.type)}
          />
        </>
      ) : null}
    </>
  );
}
