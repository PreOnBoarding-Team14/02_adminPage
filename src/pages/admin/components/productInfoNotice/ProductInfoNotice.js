import { FormInput } from 'components';
import { useState } from 'react';
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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const CreateItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const RedButton = styled.button`
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

export default function ProductInfoNotice() {
  const [itemList, setItemList] = useState([]);

  const addItem = () => {
    let addItemList = [...itemList, []];
    setItemList(addItemList);
  };

  const addNotice = () => {
    alert('정보고시가 추가되었습니다.');
  };

  return (
    <Container>
      <Wrapper>
        {/* Header - 제목과 삭제 버튼 */}
        <Header>
          <Title>정보 고시 생성순서</Title>
          <HeaderButton>삭제</HeaderButton>
        </Header>
        {/* FormInput component */}
        <InputWrapper>
          <FormInput
            attr={{
              title: ' 제품명 / 중량 ',
              placeholder: '제품명 / 중량을 입력해 주세요.',
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <FormInput
            attr={{
              title: ' 원산지 / 원재료 함량 ',
              placeholder: '원산지 / 원재 함량을 입력해 주세요.',
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <FormInput
            attr={{
              title: ' 등급 ',
              placeholder: '등급 (근내지방도 수치)을 입력해 주세요.',
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <FormInput
            attr={{
              title: ' 보관 ',
              placeholder: '보관 방식을 입력해 주세요.',
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <FormInput
            attr={{
              title: ' 식품 유형 ',
              placeholder: '식품 유형을 입력해 주세요. (ex) 포장육',
            }}
          />
        </InputWrapper>
        {/* 항목 추가 버튼 클릭 시 추가되는 FormInput */}
        {itemList.map((item, index) => {
          return (
            <CreateItem key={index} id={index}>
              <FormInput attr={{ placeholder: '항목 제목 자유 입력' }} />
              <FormInput attr={{ placeholder: '내용을 입력해주세요.' }} />
              <RedButton>삭제</RedButton>
            </CreateItem>
          );
        })}
        <AddItemButton onClick={addItem}>+ 항목 추가</AddItemButton>
      </Wrapper>
      <NoticeAddButton onClick={addNotice}>+ 정보고시 추가</NoticeAddButton>
    </Container>
  );
}
