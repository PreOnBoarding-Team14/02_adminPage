import styled from 'styled-components';
import { SalesRadio, ExposureRadio } from '.';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  width: '';
  height: '';
  display: flex;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-top: none;
`;

const TitleBox = styled.div`
  width: '';
  height: '';
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const NameBox = styled.div`
  background-color: ${({ theme }) => theme.lightGrayColor};
`;

const InfoBox = styled.div``;

export default function ExposureNSalesPeriod() {
  return (
    <Container>
      <TitleBox>노출 및 판매기간 설정</TitleBox>
      <RowWrapper>
        <NameBox>상품 노출 기한 *</NameBox>
        <InfoBox>
          <SalesRadio />
        </InfoBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품 판매 기한 *</NameBox>
        <InfoBox>
          <ExposureRadio />
        </InfoBox>
      </RowWrapper>
    </Container>
  );
}
