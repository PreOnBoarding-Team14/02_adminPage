import { FormTextArea } from 'components';
import { useCallback } from 'react';
import styled from 'styled-components';
import { FormCheckBox } from 'components';

export default function ExposureNSalesPeriod() {
  const onChange = useCallback(() => console.log('onChange'));
  return (
    <>
      <FormTextArea
        attrs={{
          name: '모야',
          placeholder: '검색어를 입력해주세요',
          onChange,
          rows: 1,
          cols: 1,
        }}
      />
      <FormTextArea
        attrs={{
          name: '김치전',
          placeholder: '필터 태그를 입력하세여',
          onChange,
          rows: 1,
          cols: 1,
        }}
      />
    </>
  );
}
