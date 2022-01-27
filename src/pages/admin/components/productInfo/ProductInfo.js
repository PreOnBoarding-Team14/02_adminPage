import styled from 'styled-components';
import { FormSelect } from 'components';

export default function ProductInfo() {
  const option = [
    { name: 'd' },
    { name: 'b', hi: 'c' },
    { name: 'c', selected: true },
  ];
  const attr = {
    width: '300px',
    height: '50px',
  };
  return (
    <div>
      test
      <FormSelect attr={attr} option={option} />;
    </div>
  );
}
