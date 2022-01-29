import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Text = styled.span`
  display: flex;
  padding: 10px;
  align-items: center;
  text-align: center;
  background-color: inherit;
`;

const TitleBar = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  font-weight: 600;
  padding: 5px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  justify-content: space-between;
  vertical-align: middle;
`;

const RequiredStar = styled.label`
  font-weight: bold;
  &:after {
    color: #e32;
    content: '*';
    display: inline;
  }
`;

const NullOption = styled.span`
  width: 100%;
  height: 450px;
  text-align: center;
  line-height: 10;
  font-size: ${({ theme }) => theme.bigFontSize};
  font-weight: 600;
  background-color: ${({ theme }) => theme.darkGrayColor};
  border-bottom-left-radius: ${({ theme }) => theme.bigRadius};
  border-bottom-right-radius: ${({ theme }) => theme.bigRadius};
`;

const OptionSetWrapper = styled.div`
  width: 100%;
  height: 800px;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize};
  background-color: ${({ theme }) => theme.veryLightGrayColor};
  display: flex;
  flex-direction: column;
`;

const OptionSetAddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.pointColor};
  font-size: '14px';
  font-weight: 500;
  padding: 15px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.bigRadius};
  position: relative;
`;

const DeleteBtn = styled.div`
  border-radius: ${({ theme }) => theme.bigRadius};
  border: 1px solid ${({ theme }) => theme.lightGrayColor};
  border-radius: 5px;
  width: 80px;
  height: 30px;
  float: right;
`;

const OptionSetItem = styled.div`
  /* display: flex; */
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: ${({ theme }) => theme.bigRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const ProductOptionStyled = {
  Container,
  Text,
  TitleBar,
  OptionSetWrapper,
  NullOption,
  OptionSetItem,
  OptionSetAddBtn,
  DeleteBtn,
  RequiredStar,
  ImageWrapper,
};

export default ProductOptionStyled;
