import { FormRadio } from 'components';
import { v4 } from 'uuid';

const attr = {
  width: '',
  height: '',
};

const radio = [
  { id: v4(), name: 'sales', text: '제한 없음', defaultChecked: true },
  { id: v4(), name: 'sales', text: '미판매' },
  { id: v4(), name: 'sales', text: '판매 기간 설정' },
];

export default function SalesRadio() {
  return <FormRadio attr={attr} radio={radio} />;
}
