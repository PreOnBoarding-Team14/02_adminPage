import styled from 'styled-components';
import { FormCheckBox } from 'components';

export default function ExposureNSalesPeriod() {
  const categories = [{ name: '등심' }, { name: '안심' }, { name: '갈비' }];

  return (
    <div>
      {categories.map((ele, idx) => {
        return <FormCheckBox key={idx} categoryName={ele.name} />;
      })}
    </div>
  );
}
