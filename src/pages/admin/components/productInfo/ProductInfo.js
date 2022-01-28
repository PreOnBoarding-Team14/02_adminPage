import styled from 'styled-components';
import { FormCheckBox, FormInput } from 'components';
import InputBar from './InputBar';
import { useCallback, useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid ${({ theme }) => theme.borderGrayColor};
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.titleSize};
  font-weight: 600;
  padding: 20px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 1100px;
  gap: 1px;
  grid-template-columns: 1fr 5fr;
  background-color: ${({ theme }) => theme.borderGrayColor};
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const Cols = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 4.35fr 1fr 1fr 1fr 1fr 2.4fr 1fr; //415px 95px 95px 95px 95px 230px 90px; //4.35fr 1fr 1fr 1fr 1fr 2.4fr 1fr; //415px 95px 95px 95px 95px 230px 90px;
  height: 100%;
  gap: 1px;
`;

const BoxsGrid = styled.div`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  background-color: ${({ theme }) => theme.mainBgColor};
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1px;
`;

const Box = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
  margin: 20px 10px;
  border-radius: ${({ theme }) => theme.miniRadius};
  padding: 25px 30px;
  overflow-y: scroll;
  max-height: 415px;
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const SelectCategory = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.veryWeekBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2.5px solid ${({ theme }) => theme.pointColor};
  border-radius: ${({ theme }) => theme.bigRadius};
  margin-bottom: 15px;
  position: relative;
`;

const Text = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.mainBgColor};
`;

const GrayText = styled(Text)`
  background-color: ${({ theme }) => theme.lightGrayColor};
`;

const CancelBtn = styled.span`
  cursor: pointer;
`;

const InputBox = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  display: grid;
  grid-template-columns: 8fr 1fr;
  width: 100%;
  height: 100%;
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
`;

const Col = styled.div`
  display: grid;
  gap: 1px;
  width: 100%;
  place-content: center center;
  height: 100%;
  background-color: ${({ theme }) => theme.lightGrayColor};
`;

const ColTitle = styled.span`
  padding: 20px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.lightGrayColor};
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const Category = styled.span``;

const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid ${({ theme }) => theme.pointColor};
  margin: 5px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.bigRadius};
  position: relative;
`;
const SecondRow = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  align-items: center;
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const SecondeGridCol = styled.div`
  padding: 20px 0px;
  display: grid;
  background-color: ${({ theme }) => theme.mainBgColor};
  grid-template-rows: repeat(3, 1fr);
  font-size: ${({ theme }) => theme.bigFontSize};
`;
const SecondGridRow = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CodeGrid = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  height: 100%;
  gap: 1px;
`;

const ImageButton = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  border-radius: ${({ theme }) => theme.bigRadius};
  border: 2.5px solid ${({ theme }) => theme.pointColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: auto 20px;
  cursor: pointer;
`;

const CancelXButton = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancleCircleButton = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  cursor: pointer;
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
`;

const FlexCol = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Normal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const DATA = [
  { value: 'as1', checked: false },
  { value: '2as', checked: false },
  { value: 'as3', checked: false },
  { value: '4as', checked: false },
  { value: '5asa', checked: false },
  { value: '6asa', checked: false },
  { value: '7as', checked: false },
  { value: '8as', checked: false },
  { value: '9as', checked: false },
  { value: '1as0', checked: false },
];

export default function ProductInfo() {
  const [product, setProduct] = useState(DATA);
  // const onDelete = (id) => {
  //   setProduct((oldProduct) => {
  //     const findIndex = oldProduct.findIndex((item) => item.id === id);
  //     return [
  //       ...oldProduct.slice(0, findIndex),
  //       ...oldProduct.slice(findIndex + 1),
  //     ];
  //   });
  // };

  const onDelete = (value) => {
    setProduct((oldProduct) => {
      const findIndex = oldProduct.findIndex((item) => item.value === value);
      const newProduct = [
        ...oldProduct.slice(0, findIndex),
        { value: oldProduct[findIndex].value, checked: false },
        ...oldProduct.slice(findIndex + 1),
      ];
      return newProduct;
    });
  };

  const onChange = useCallback((e) => {
    setProduct((oldProduct) => {
      const findIndex = oldProduct.findIndex(
        (item) => item.value === e.target.value
      );
      // console.log(findIndex);
      //console.log(oldProduct[findIndex].value);
      if (oldProduct[findIndex].checked) {
        const newProduct = [
          ...oldProduct.slice(0, findIndex),
          { value: oldProduct[findIndex].value, checked: false },
          ...oldProduct.slice(findIndex + 1),
        ];
        return newProduct;
      } else {
        const newProduct = [
          ...oldProduct.slice(0, findIndex),
          { value: oldProduct[findIndex].value, checked: true },
          ...oldProduct.slice(findIndex + 1),
        ];
        return newProduct;
      }
    });
  });

  //console.log(product);
  // const onChange = useCallback((e) => {
  //   //product.map((item) => console.log(item.text === e.target.value));
  //   const ASK = product.map((item) => item.text === e.target.value);
  //   console.log(ASK);
  //   if (product.length > 0) {
  //     setProduct((oldProduct) => {
  //       const findIndex = oldProduct.findIndex(
  //         (item) => item.text === e.target.value
  //       );
  //       //console.log(findIndex);
  //       if (findIndex === -1) {
  //         return [
  //           {
  //             id: Date.now(),
  //             text: e.target.value,
  //           },
  //           ...oldProduct,
  //         ];
  //       }
  //       return [
  //         ...oldProduct.slice(0, findIndex),
  //         ...oldProduct.slice(findIndex + 1),
  //       ];
  //     });
  //   } else {
  //     setProduct((oldProduct) => [
  //       {
  //         id: Date.now(),
  //         text: e.target.value,
  //       },
  //       ...oldProduct,
  //     ]);
  //   }
  // });
  //console.log(product);
  // console.log(product);
  return (
    <Container>
      <Title>상품 기본 정보</Title>
      <Grid>
        <Cols>
          <Col>
            <ColTitle>카테고리</ColTitle>
          </Col>
          <Col>
            <ColTitle>필터 태그</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품명</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 구성 소개 정보</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 썸네일</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 대표 이미지</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 총 재고</ColTitle>
          </Col>
        </Cols>
        <Cols>
          <BoxsGrid>
            <Box>
              <FormCheckBox
                attrs={{
                  name: 'food',
                  data: product,
                  onChange,
                }}
              />
            </Box>
            <Box>
              {product.map((item) => (
                <SelectCategory
                  style={{ display: item.checked ? 'flex' : 'none' }}
                  key={item.value}
                >
                  <Category>{item.value}</Category>
                  <CancelBtn onClick={() => onDelete(item.value)}>X</CancelBtn>
                </SelectCategory>
              ))}
            </Box>
          </BoxsGrid>
          <SecondRow style={{ padding: '20px 10px' }}>
            <InputBox>
              <FormInput
                attr={{
                  placeholder: '필터 태그를 검색해 주세요.',
                }}
              />
              <SearchBtn>검색</SearchBtn>
            </InputBox>
          </SecondRow>
          <CodeGrid>
            <InputBar placeholder="상품명을 입력해 주세요." />
            <GrayText>상품 코드</GrayText>
            <Text>상품 코드</Text>
          </CodeGrid>
          <InputBar placeholder="상품 구성 소개 정보를 입력해 주세요." />
          <SecondGridRow>
            <ImageButton>+ 이미지 첨부</ImageButton>
            <SecondRow>
              <CancelXButton>이미지 파일명.jpg</CancelXButton>
              <CancleCircleButton>X</CancleCircleButton>
            </SecondRow>
            <SecondRow />
          </SecondGridRow>
          <SecondGridRow>
            <SecondeGridCol>
              <ImageButton>+ 이미지 첨부</ImageButton>
              <SecondRow />
              <SecondRow />
            </SecondeGridCol>
            <FlexCol>
              <Normal>
                <CancelXButton>이미지 파일명.jpg</CancelXButton>
                <CancleCircleButton>X</CancleCircleButton>
              </Normal>
              <Normal>
                <CancelXButton>이미지 파일명.jpg</CancelXButton>
                <CancleCircleButton>X</CancleCircleButton>
              </Normal>
            </FlexCol>
            <SecondRow />
          </SecondGridRow>
          <SecondRow style={{ paddingLeft: '20px' }}>5개</SecondRow>
        </Cols>
      </Grid>
    </Container>
  );
}
