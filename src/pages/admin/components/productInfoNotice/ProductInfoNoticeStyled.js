import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.subBgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const BigTitle = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 15px 18px;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: 15px;
  background-color: ${({ theme }) => theme.mainBgColor};
  padding: 30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const HeaderButton = styled.div`
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  background-color: ${({ theme }) => theme.mainBgColor};
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.bigFontSize};
  color: ${({ theme }) => theme.veryBlackText};
  font-weight: bold;
`;

const TitleAndInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.FontSize};
  color: ${({ theme }) => theme.veryBlackText};
  font-weight: bold;
`;

const InputWrapper = styled.div`
  padding: 8px 10px;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const CreateItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const RedButton = styled.button`
  width: 150px;
  padding: 10px 30px;
  color: ${({ theme }) => theme.red};
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  cursor: pointer;
`;

const AddItemButton = styled.button`
  padding: 10px 40px;
  color: ${({ theme }) => theme.pointColor};
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  font-weight: bold;
  cursor: pointer;
`;

const NoticeAddButton = styled.button`
  width: 95%;
  padding: 10px 40px;
  color: ${({ theme }) => theme.pointColor};
  background-color: ${({ theme }) => theme.subBgColor};
  border: 2px solid ${({ theme }) => theme.pointColor};
  font-weight: bold;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ProductInfoNoticeStyled = {
  Container,
  BigTitle,
  Wrapper,
  Header,
  HeaderButton,
  Title,
  TitleAndInput,
  SubTitle,
  InputWrapper,
  CreateItem,
  RedButton,
  AddItemButton,
  NoticeAddButton,
};

export default ProductInfoNoticeStyled;
