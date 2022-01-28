import styled from 'styled-components';
import { FormSelect } from 'components';
import { useCallback } from 'react';

export default function ProductInfo() {
  const onChange = useCallback(() => console.log('onChange'));
  const option = [
    { name: 'd' },
    { name: 'b', hi: 'c' },
    { name: 'c', selected: true },
  ];
  const attr = {
    width: '200px',
    height: '50px',
    onChange,
  };
  return <FormSelect attr={attr} option={option} />;
}
