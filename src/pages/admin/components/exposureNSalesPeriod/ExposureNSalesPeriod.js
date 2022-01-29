import { SalesRadio, ExposureRadio } from '.';
import { FormDatePicker } from 'components';
import ExposureNSalesPeriodStyled from './ExposureNSalesPeriodStyled';

const { Container, RowWrapper, TitleBox, NameBox, InfoBox, DatePickerWrapper } =
  ExposureNSalesPeriodStyled;

export default function ExposureNSalesPeriod() {
  const dateRangePickerAttr = {
    type: 'time',
    title: '주문시간',
    isRange: true,
  };

  return (
    <Container>
      <TitleBox>노출 및 판매기간 설정</TitleBox>
      <RowWrapper>
        <NameBox>상품 노출 기한 </NameBox>
        <InfoBox>
          <SalesRadio />
          <DatePickerWrapper>
            <FormDatePicker attr={dateRangePickerAttr} />
          </DatePickerWrapper>
        </InfoBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품 판매 기한 </NameBox>
        <InfoBox>
          <ExposureRadio />
          <DatePickerWrapper>
            <FormDatePicker attr={dateRangePickerAttr} />
          </DatePickerWrapper>
        </InfoBox>
      </RowWrapper>
    </Container>
  );
}
