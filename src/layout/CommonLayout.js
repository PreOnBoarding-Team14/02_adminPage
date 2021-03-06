import Admin from 'pages/admin/Admin';
import styled from 'styled-components';
import Tab from './Tab';
import { Util } from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 55px;
  background-color: #060606;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

const Logo = styled.img`
  background-image: center center;
  background-size: cover;
`;

const HeaderTitle = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
`;

const RegisterProduct = styled.div`
  padding: 20px 35px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  border-bottom: 2px solid ${({ theme }) => theme.subBgColor};
`;

const RegisterTitle = styled.span`
  font-size: 16px;
  margin-left: 10px;
  font-weight: 600;
  color: black;
`;

const RegisterGrayTitle = styled(RegisterTitle)`
  font-size: 14px;
  color: #6c6c6c;
  font-weight: 500;
`;

const Overview = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.mainBgColor};
`;

const ContentGrid = styled.div`
  background-color: ${({ theme }) => theme.subBgColor};
  width: 100%;
  display: grid;
  grid-template-rows: 50px 40px 1fr;
  border: 2px solid rgba(0, 0, 0, 0.5);
  gap: 1px;
`;

const Content = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.mainBgColor};
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px 25px;
`;

const Items = styled.ul`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 17px;
`;

const Item = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.mainBgColor};
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 17px;
  cursor: pointer;
  font-weight: 600;
  &:nth-child(3) {
    background-color: #d6d5e2;
    color: ${({ theme }) => theme.pointColor};
  }
`;

const ThreeGrid = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 40px);
  background-color: ${({ theme }) => theme.subBgColor};
`;

const Row = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: 1fr 4.75fr;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100%;
  padding: 0px 17px;
`;

const MainHeaderSpan = styled.span`
  font-weight: 600;
`;
const MainHeaderButton = styled.div`
  padding: 10px 17px;
  background-color: ${({ theme }) => theme.pointColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.mainBgColor};
  cursor: pointer;
`;

const BigItems = styled.div`
  display: grid;
  gap: 1px;
  grid-template-rows: repeat(3, 40px) 120px repeat(6, 40px) 1fr;
`;

export function CommonLayout() {
  return (
    <Container>
      <Header>
        <Logo src="https://user-images.githubusercontent.com/80146176/151404279-fde572a0-77ba-40a8-95d2-489113e1f4e0.png" />
        <HeaderTitle>ADMIN</HeaderTitle>
      </Header>
      <RegisterProduct>
        <RegisterTitle>?????? ??????</RegisterTitle>
        <RegisterGrayTitle>ADM_PRODUCT_AD</RegisterGrayTitle>
      </RegisterProduct>
      <Overview>
        <ContentGrid>
          <Row>
            <Items>
              <Logo src="https://user-images.githubusercontent.com/80146176/151408338-468d2544-baf5-4b10-b987-a8e9c1856bd5.png" />
            </Items>
            <Items />
          </Row>
          <Row>
            <Tab title="?????? ??????" />
            <MainHeader>
              <MainHeaderSpan>?????? ??????</MainHeaderSpan>
              <MainHeaderButton
                onClick={() =>
                  Util.getAlertMsg('alert', '???????????? ?????? ??????????????????')
                }
              >
                ????????????
              </MainHeaderButton>
            </MainHeader>
          </Row>
          <Row>
            <BigItems>
              <Tab title="??????" />
              <Tab title="??????" />
              <Tab title="??????" />
              <ThreeGrid>
                <Item>?????? ?????????</Item>
                <Item>?????? ?????? ??????</Item>
                <Item>?????? ??????</Item>
              </ThreeGrid>
              <Tab title="??????" />
              <Tab title="??????" />
              <Tab title="????????????" />
              <Tab title="??????" />
              <Tab title="?????? ?????? ??????" />
              <Tab title="??????" />
              <Items />
            </BigItems>
            <Content>
              <Admin />
            </Content>
          </Row>
        </ContentGrid>
      </Overview>
    </Container>
  );
}
