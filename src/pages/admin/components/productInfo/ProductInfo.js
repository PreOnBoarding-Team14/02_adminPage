import styled from 'styled-components';
import { FormAddImg, FormAddOneImg, FormCheckBox, FormInput } from 'components';
import InputBar from './InputBar';
import { useCallback, useState } from 'react';
import {
  TAG_LIST as TAG,
  CATEGORY_DATA as DATA,
} from '../../../../utils/DataSet';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid ${({ theme }) => theme.borderGrayColor};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  background-color: ${({ theme }) => theme.borderGrayColor};
  display: grid;
  width: 100%;
  grid-template-rows: 415px 415px 95px 95px 130px 230px 90px; // 4.35fr 1fr 1fr 1fr 1fr 2.4fr 1fr; //415px 95px 95px 95px 95px 230px 90px; //4.35fr 1fr 1fr 1fr 1fr 2.4fr 1fr; //415px 95px 95px 95px 95px 230px 90px;
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
  display: flex;
  flex-direction: column;
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

const Placeholder = styled.span`
  color: #757575;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

const InputBox = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  justify-content: space-between;
  padding-right: 10px;
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
`;

const SelectTagBox = styled(InputBox)`
  height: 300px;
  word-spacing: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
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
  padding: 10px 15px;
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
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  align-items: center;
`;

const FilterSearch = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  flex-direction: column;
`;

const ImageLayout = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding: 20px;
`;

const CodeGrid = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  height: 100%;
  gap: 1px;
`;

const Normal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const FilterDiv = styled.div`
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr 3fr;
  position: absolute;
  width: 60vw;
  height: 600px;
  margin: auto;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 3px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
  overflow-y: scroll;
`;

const FilterTagBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: auto;
  padding-bottom: 200px;
  width: 100%;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 3px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
`;

const ViewTagWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
`;

const ViewTagBox = styled.div`
  margin: 5px 10px;
  max-height: 50px;
  padding: 15px;
  display: flex;
  background-color: ${({ theme }) => theme.tagGreen};
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
  align-items: center;
`;

const TagBox = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  max-height: 50px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.tagGreen};
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
`;
const TagSpan = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.bigFontSize};
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const OverScreen = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
`;

const PATTERN = /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g;

export default function ProductInfo() {
  const [product, setProduct] = useState(DATA);
  const [isCheck, setIsCheck] = useState(0);
  const [focus, setFocus] = useState(false);
  const [tag, setTag] = useState([]);
  const [query, setQuery] = useState('');
  const focusClick = () => {
    setFocus((prev) => !prev);
  };

  const onTagClick = (e) => {
    setTag((oldTag) => {
      const findIndex = oldTag.findIndex(
        (item) => item.value === e.target.innerText
      );
      if (findIndex !== -1) return oldTag;
      else {
        return [...oldTag, { id: Date.now(), value: e.target.innerText }];
      }
    });
    setFocus(false);
  };
  const onDeleteTag = (id) => {
    setTag((oldTag) => {
      const findIndex = oldTag.findIndex((item) => item.id === id);
      return [...oldTag.slice(0, findIndex), ...oldTag.slice(findIndex + 1)];
    });
  };

  const onSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);
  const onDelete = (value) => {
    setProduct((oldProduct) => {
      const findIndex = oldProduct.findIndex((item) => item.value === value);
      const newProduct = [
        ...oldProduct.slice(0, findIndex),
        { value: oldProduct[findIndex].value, checked: false },
        ...oldProduct.slice(findIndex + 1),
      ];
      setIsCheck((prev) => prev - 1);
      return newProduct;
    });
  };

  const onChange = useCallback((e) => {
    setProduct((oldProduct) => {
      const findIndex = oldProduct.findIndex(
        (item) => item.value === e.target.value
      );

      if (oldProduct[findIndex].checked) {
        const newProduct = [
          ...oldProduct.slice(0, findIndex),
          { value: oldProduct[findIndex].value, checked: false },
          ...oldProduct.slice(findIndex + 1),
        ];
        setIsCheck((prev) => prev - 1);
        return newProduct;
      } else {
        const newProduct = [
          ...oldProduct.slice(0, findIndex),
          { value: oldProduct[findIndex].value, checked: true },
          ...oldProduct.slice(findIndex + 1),
        ];
        setIsCheck((prev) => prev + 1);
        return newProduct;
      }
    });
  }, []);
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
                  style={{
                    display: item.checked ? 'flex' : 'none',
                  }}
                  key={item.value}
                >
                  <Category>{item.value}</Category>
                  <CancelBtn onClick={() => onDelete(item.value)}>X</CancelBtn>
                </SelectCategory>
              ))}
              {isCheck <= 0 && (
                <Normal
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: '#9F9F9F',
                  }}
                >
                  카테고리를 지정해 주세요.
                </Normal>
              )}
            </Box>
          </BoxsGrid>
          <FilterSearch style={{ padding: '20px 10px' }}>
            <InputBox onClick={focusClick}>
              <ViewTagWrapper>
                <Placeholder>필터 태그를 검색해 주세요.</Placeholder>
              </ViewTagWrapper>
              <SearchBtn>검색</SearchBtn>
            </InputBox>
            <SelectTagBox>
              {tag.length > 0 &&
                tag.map((item) => (
                  <ViewTagBox key={item.id}>
                    <TagSpan>{item.value}</TagSpan>
                    <TagSpan onClick={() => onDeleteTag(item.id)}>X</TagSpan>
                  </ViewTagBox>
                ))}
            </SelectTagBox>
          </FilterSearch>
          {focus && (
            <FilterDiv>
              <FilterSearch style={{ padding: '20px 10px' }}>
                <InputBox>
                  <FormInput
                    attr={{
                      placeholder: '필터 태그를 검색해 주세요.',
                      onChange: onSearch,
                    }}
                  />
                  <SearchBtn>검색</SearchBtn>
                </InputBox>
              </FilterSearch>
              <FilterTagBox>
                {query.length === 0
                  ? TAG.map((item) => (
                      <TagBox key={item} onClick={onTagClick}>
                        <TagSpan>{item}</TagSpan>
                      </TagBox>
                    ))
                  : TAG.map(
                      (item) =>
                        item?.includes(query) && (
                          <TagBox key={item} onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        )
                    )}
                {TAG.filter((item) => item.includes(query)).length === 0 && (
                  <div>검색 결과 없음</div>
                )}
              </FilterTagBox>
            </FilterDiv>
          )}
          {focus && <OverScreen onClick={focusClick} />}
          <CodeGrid>
            <InputBar placeholder="상품명을 입력해 주세요." />
            <GrayText>상품 코드</GrayText>
            <Text>1643435697397</Text>
          </CodeGrid>
          <InputBar placeholder="상품 구성 소개 정보를 입력해 주세요." />
          <ImageLayout>
            <FormAddOneImg InputId="single" />
          </ImageLayout>
          <ImageLayout>
            <FormAddImg InputId="mutiii" />
          </ImageLayout>
          <SecondRow style={{ paddingLeft: '20px' }}>5개</SecondRow>
        </Cols>
      </Grid>
    </Container>
  );
}
