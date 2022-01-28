import React, { useState } from 'react';
import styled from 'styled-components';

const ProductOptionStyled = styled.div`
  width: 80%;
  background-color: inherit;
  border-radius: 30px;
  border: 2px solid gray;
`;

const TitleBar = styled.div`
  /* display: inline-flex;
  flex-direction: row;
  justify-content: space-between; */
`;

const FormList = styled.div`
  width: 800px;
  height: 500px;
  background-color: gray;
`;

export default function ProductOption() {
  const [optionSetArr, SetOptionSetArr] = useState([]);

  const onClick = (e, type) => {
    switch (type) {
      case 'addOption':
        console.log('옵션추가');
        break;
      default:
        break;
    }
  };

  return (
    <ProductOptionStyled>
      <TitleBar>
        <h5>상품옵션</h5>
        <button onClick={(e) => onClick(e, 'addOption')}>
          + 옵션 세트 추가
        </button>
      </TitleBar>
      <FormList>옵션세트를 추가하여 옵션을 구성해주세요</FormList>
    </ProductOptionStyled>
  );
}
