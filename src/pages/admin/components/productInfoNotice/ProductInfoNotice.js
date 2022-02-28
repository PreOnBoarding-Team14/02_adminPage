import { FormInput } from 'components';
import { useState } from 'react';
import { Util } from 'utils';
import ProductInfoNoticeStyled from './ProductInfoNoticeStyled';

const {
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
} = ProductInfoNoticeStyled;

export default function ProductInfoNotice() {
  const [itemList, setItemList] = useState([]);
  const [sequence, setSequence] = useState(1);

  // 항목 추가 후 항목삭제 버튼 클릭 시 항목 삭제 구현
  const deleteItem = (id) => {
    const deleteList = itemList.filter((item) => item.id !== id);
    setItemList(deleteList);
  };

  // 정보고시 삭제 버튼 클릭 이벤트
  const deleteNotice = () => {
    if (sequence === 1) {
      Util.getAlertMsg('alert', '삭제할 수 없습니다.');
    } else {
      setSequence((curr) => curr - 1);
      Util.getAlertMsg('alert', '삭제되었습니다');
    }
  };

  // 항목 추가 버튼 클릭 이벤트
  const addItem = () => {
    const addItemList = [...itemList, { id: Date.now() }];
    setItemList(addItemList);
  };

  // 정보 고시 추가 버튼 클릭 이벤트
  const addNotice = () => {
    setSequence((curr) => curr + 1);
    Util.getAlertMsg('alert', '정보고시가 추가되었습니다.');
  };

  return (
    <>
      <BigTitle>
        <Title>상품 정보 고시</Title>
      </BigTitle>
      <Container>
        <Wrapper>
          {/* Header - 제목과 삭제 버튼 */}
          <Header>
            <Title>정보 고시 {sequence}</Title>
            <HeaderButton onClick={deleteNotice}>삭제</HeaderButton>
          </Header>
          <TitleAndInput>
            <SubTitle>제품명 / 중량</SubTitle>
            {/* FormInput component */}
            <InputWrapper>
              <FormInput
                attr={{ placeholder: '제품명 / 중량을 입력해 주세요.' }}
              />
            </InputWrapper>
          </TitleAndInput>
          <TitleAndInput>
            <SubTitle>원산지 / 원재료 함량</SubTitle>
            <InputWrapper>
              <FormInput
                attr={{ placeholder: '원산지 / 원재 함량을 입력해 주세요.' }}
              />
            </InputWrapper>
          </TitleAndInput>
          <TitleAndInput>
            <SubTitle>등급</SubTitle>
            <InputWrapper>
              <FormInput
                attr={{
                  placeholder: '등급 (근내지방도 수치)을 입력해 주세요.',
                }}
              />
            </InputWrapper>
          </TitleAndInput>
          <TitleAndInput>
            <SubTitle>보관</SubTitle>
            <InputWrapper>
              <FormInput attr={{ placeholder: '보관 방식을 입력해 주세요.' }} />
            </InputWrapper>
          </TitleAndInput>
          <TitleAndInput>
            <SubTitle>식품 유형</SubTitle>
            <InputWrapper>
              <FormInput
                attr={{ placeholder: '식품 유형을 입력해 주세요. (ex) 포장육' }}
              />
            </InputWrapper>
          </TitleAndInput>
          {/* 항목 추가 버튼 클릭 시 추가되는 FormInput */}
          {itemList.map((item, index) => {
            return (
              <CreateItem key={item.id} id={index}>
                <InputWrapper>
                  <FormInput
                    attr={{
                      placeholder: '항목 제목 자유 입력',
                    }}
                  />
                </InputWrapper>
                <InputWrapper>
                  <FormInput
                    attr={{
                      placeholder: '내용을 입력해주세요.',
                    }}
                  />
                </InputWrapper>
                <RedButton onClick={() => deleteItem(item.id)}>삭제</RedButton>
              </CreateItem>
            );
          })}
          <AddItemButton onClick={addItem}>+ 항목 추가</AddItemButton>
        </Wrapper>
        <NoticeAddButton onClick={addNotice}>+ 정보고시 추가</NoticeAddButton>
      </Container>
    </>
  );
}
