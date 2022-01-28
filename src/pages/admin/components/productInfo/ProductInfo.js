import styled from 'styled-components';
import { FormCheckBox, FormInput } from 'components';
import InputBar from './InputBar';
import { useCallback, useState } from 'react';
import { Tag } from 'antd';

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
  background-color: ${({ theme }) => theme.borderGrayColor};
  display: grid;
  width: 100%;
  grid-template-rows: 415px 95px 95px 95px 95px 230px 90px; // 4.35fr 1fr 1fr 1fr 1fr 2.4fr 1fr; //415px 95px 95px 95px 95px 230px 90px; //4.35fr 1fr 1fr 1fr 1fr 2.4fr 1fr; //415px 95px 95px 95px 95px 230px 90px;
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
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  align-items: center;
  display: flex;
`;

const FilterSearch = styled(SecondRow)`
  display: flex;
  flex-direction: column;
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

const FilterDiv = styled.div`
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr 3fr;
  position: absolute;
  width: 60vw;
  height: 600px;
  margin: auto 0;
  top: 0;
  bottom: 0;
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
  background-color: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index: 1;
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

const TAG = [
  '수명',
  '시즌',
  '신기하다',
  '업다',
  '예감',
  '음식물',
  '자신감',
  '죄인',
  '주의하다',
  '준비물',
  '천',
  '출입',
  '쾌감',
  '탄생',
  '튀다',
  '하필',
  '활용',
  '회색',
  '거액',
  '고교',
  '고집하다',
  '곧잘',
  '골짜기',
  '교훈',
  '구르다',
  '글씨',
  '노래방',
  '단편',
  '달다',
  '대처하다',
  '매다',
  '머리카락',
  '명확하다',
  '발걸음',
  '발길',
  '벌레',
  '빼앗기다',
  '생산자',
  '선진',
  '성인',
  '소매',
  '시멘트',
  '신규',
  '신청하다',
  '실은',
  '심판',
  '안기다',
  '양심',
  '이사장',
  '이자',
  '익숙해지다',
  '자세하다',
  '저거',
  '저축',
  '제비',
  '제안',
  '제안하다',
  '증세',
  '지난날',
  '진급',
  '콩나물',
  '튀어나오다',
  '표준',
  '항구',
  '허용',
  '헬기',
  '간신히',
  '갈아입다',
  '감다',
  '같이하다',
  '거짓',
  '거품',
  '걸어오다',
  '공군',
  '기술자',
  '나물',
  '달리기',
  '대도시',
  '도둑',
  '도전',
  '면',
  '모자',
  '보조',
  '불리하다',
  '불편',
  '비비다',
  '사과',
  '살아나다',
  '소파',
  '속이다',
  '수면',
  '수천',
  '스무',
  '승부',
  '시기',
  '신념',
  '신입생',
  '어린아이',
  '어쩐지',
  '여간',
  '역',
  '연락하다',
  '영향력',
  '예의',
  '이내',
  '이리저리',
  '인간적',
  '인사하다',
  '임금',
  '잘나다',
  '재능',
  '지불하다',
];

export default function ProductInfo() {
<<<<<<< HEAD
  const [product, setProduct] = useState(DATA);
  const [isCheck, setIsCheck] = useState(0);
  const [focus, setFocus] = useState(false);
  const [noQuery, setNoQuery] = useState(false);
  const [query, setQuery] = useState('');
  const focusClick = () => {
    setFocus((prev) => !prev);
  };

  const onSearch = useCallback((e) => {
    setNoQuery(false);
    setQuery(e.target.value);
    const result = TAG.filter((word) => {
      return word.includes(query[0]) || word.includes(query[1]);
    });
    console.log(result);
    if (result.legnth === 0 && query.length > 0) {
      setNoQuery(true);
    }
  });
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
  });

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
              <FormInput
                attr={{
                  placeholder: '필터 태그를 검색해 주세요.',
                }}
              />
              <SearchBtn>검색</SearchBtn>
            </InputBox>
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
                {TAG.sort().map((item) => {
                  const result0 = TAG.filter((word) => word === query[0]);
                  const result1 = TAG.filter((word) =>
                    word.includes(query[(0, 1)])
                  );
                  const result2 = TAG.filter((word) =>
                    word.includes(query[(0, 2)])
                  );
                  const result3 = TAG.filter((word) =>
                    word.includes(query[(0, 3)])
                  );
                  const result4 = TAG.filter((word) =>
                    word.includes(query[(0, 4)])
                  );
                  if (query.length === 0) {
                    return (
                      <TagBox>
                        <TagSpan>{item}</TagSpan>
                      </TagBox>
                    );
                  } else if (result0) {
                    return (
                      <TagBox>
                        <TagSpan>{item}</TagSpan>
                      </TagBox>
                    );
                  } else if (result1) {
                    return (
                      item.includes(query[0]) &&
                      item.includes(query[1]) && (
                        <TagBox>
                          <TagSpan>{item}</TagSpan>
                        </TagBox>
                      )
                    );
                  } else if (result2) {
                    return (
                      item.includes(query[0]) &&
                      item.includes(query[1]) &&
                      item.includes(query[2]) && (
                        <TagBox>
                          <TagSpan>{item}</TagSpan>
                        </TagBox>
                      )
                    );
                  } else if (result3) {
                    return (
                      item.includes(query[0]) &&
                      item.includes(query[1]) &&
                      item.includes(query[2]) &&
                      item.includes(query[3]) && (
                        <TagBox>
                          <TagSpan>{item}</TagSpan>
                        </TagBox>
                      )
                    );
                  } else if (result4) {
                    return (
                      item.includes(query[0]) &&
                      item.includes(query[1]) &&
                      item.includes(query[2]) &&
                      item.includes(query[3]) &&
                      item.includes(query[4]) && (
                        <TagBox>
                          <TagSpan>{item}</TagSpan>
                        </TagBox>
                      )
                    );
                  }
                })}
                {noQuery && <TagBox>검색 결과 없음</TagBox>};
              </FilterTagBox>
            </FilterDiv>
          )}
          {focus && <OverScreen onClick={focusClick}></OverScreen>}
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
=======
  return null;
>>>>>>> d28f4d45ecb4944360ed6f3a8c6204fa8ab11e3a
}
