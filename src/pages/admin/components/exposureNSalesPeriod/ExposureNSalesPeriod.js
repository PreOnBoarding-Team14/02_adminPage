import styled from 'styled-components';
import { SalesRadio, ExposureRadio } from '.';
import { FormDatePicker } from 'components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  height: 180px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-top: none;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const NameBox = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.lightGrayColor};
  border-right: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const InfoBox = styled.div``;

const DatePickerWrapper = styled.div`
  margin: 10px;
`;

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
