import styled from 'styled-components';
import { FormInput } from 'components';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width: 800px;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const NameBox = styled.div`
  background-color: ${({ theme }) => theme.subBgColor};
`;

const InputBox = styled.div``;

const attr = {
  title: 'hello',
  placeholder: 'hi',
};

export default function ProductInfo() {
  return (
    <Container>
      <RowWrapper>상품 기본 정보</RowWrapper>
      <RowWrapper>
        <NameBox>카테고리 *</NameBox>
        <InputBox>
          <FormInput attr={attr} />
        </InputBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>필터 태그</NameBox>
        <InputBox></InputBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품명 *</NameBox>
        <InputBox></InputBox>
        <NameBox>상품 코드</NameBox>
        <InputBox></InputBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품 구성 소개 정보 *</NameBox>
        <InputBox></InputBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품 썸네일</NameBox>
        <InputBox></InputBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품 대표 이미지</NameBox>
        <InputBox></InputBox>
      </RowWrapper>
      <RowWrapper>
        <NameBox>상품 총 재고 *</NameBox>
        <InputBox></InputBox>
      </RowWrapper>
    </Container>
  );
}
