import { FormRadio } from 'components';
import { v4 } from 'uuid';

const attr = {
  width: '',
  height: '',
};

const radio = [
  { id: v4(), name: 'exposure', text: '제한 없음', defaultChecked: true },
  { id: v4(), name: 'exposure', text: '미노출' },
  { id: v4(), name: 'exposure', text: '노출 기간 설정' },
];

export default function ExposureRadio() {
  return <FormRadio attr={attr} radio={radio} />;
}
