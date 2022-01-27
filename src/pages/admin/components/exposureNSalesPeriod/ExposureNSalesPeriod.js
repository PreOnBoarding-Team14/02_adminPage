import styled from 'styled-components';
import { FormCheckBox } from 'components';

export default function ExposureNSalesPeriod() {
  const categoryName = '등심';

  return (
    <div>
      <FormCheckBox categoryName={categoryName} />
    </div>
  );
}
