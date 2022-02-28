import styled from 'styled-components';

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
  padding: 0px 20px;
  height: 40px;
  font-size: ${({ theme }) => theme.bigFontSize};
  font-weight: bold;
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

const ExposureNSalesPeriodStyled = {
  Container,
  RowWrapper,
  TitleBox,
  NameBox,
  InfoBox,
  DatePickerWrapper,
};

export default ExposureNSalesPeriodStyled;
