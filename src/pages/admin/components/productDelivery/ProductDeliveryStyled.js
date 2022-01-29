import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  color: ${({ theme }) => theme.veryBlackText};
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 15px 18px;
`;

const DeliverySetting = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  grid-template-rows: 1fr;
`;

const Title = styled.div`
  background-color: ${({ theme }) => theme.lightGrayColor};
  padding: 15px;
  border-right: 1px solid ${({ theme }) => theme.borderGrayColor};
  font-weight: bold;
`;

const DatePickers = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

const TitleSpan = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ProductDeliveryStyled = {
  Container,
  TitleWrapper,
  DeliverySetting,
  Title,
  DatePickers,
  TitleSpan,
};

export default ProductDeliveryStyled;
