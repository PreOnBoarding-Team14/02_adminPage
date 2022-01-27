import styled from 'styled-components';
import { FormDatePicker, FormInput } from 'components';
import { useCallback } from 'react';

export default function ProductDelivery() {
  /*
		예시!!
		onChange, onClick 등 이벤트 함수는 기존에 하던 것 처럼 만들어서 넣으면 됨.
	*/

  const onChange = useCallback(() => console.log('onChange'));

  const dateRangePickerAttr = {
    type: 'date',
    title: '주문시간',
    isRange: true,
    onChange,
  };

  const timePickerAttr = {
    type: 'time',
    title: '새벽배송',
    isRange: true,
    onChange,
  };

  const inputAttr = {
    title: '상품명',
    required: true,
    maxLength: 10,
    minLength: 7,
  };

  return (
    <>
      <FormDatePicker attr={dateRangePickerAttr} />
      <div />
      <FormDatePicker attr={timePickerAttr} />
      <div />
      <FormInput attr={inputAttr} />
    </>
  );
}
