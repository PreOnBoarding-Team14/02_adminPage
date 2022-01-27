import styled from 'styled-components';
import { FormSelect } from 'components';

export default function ProductInfo() {
  const option = [
    { name: 'd' },
    { name: 'b', hi: 'c' },
    { name: 'c', selected: true },
  ];
  const attr = {
    width: '200px',
    height: '50px',
  };
  return <FormSelect attr={attr} option={option} />;
}
