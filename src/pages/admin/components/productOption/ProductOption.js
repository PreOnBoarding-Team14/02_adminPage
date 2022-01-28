import React, { useState } from 'react';
import { OptionSet, AddOption } from '../../containers';
import styled from 'styled-components';

const ProductOptionStyled = styled.div`
  width: 100%;
  background-color: inherit;
  border-radius: 30px;
  border: 2px solid gray;
`;

const TitleBar = styled.div`
  /* display: inline-flex;
  flex-direction: row;
  justify-content: space-between; */
`;

const OptionSetItem = styled.div`
  width: inherit;
`;

const FormList = styled.div`
  width: 800px;
  height: 500px;
  background-color: gray;
`;

export default function ProductOption() {
  const [optionSetArr, setOptionSetArr] = useState([]);
  const [optionSetIdx, setOptionSetIdx] = useState(0);

  /**
   * optionSet 안에
      optionName,
      normalPrice,
      salesPrice,
      stock,
      isTex,
      onClick(추가, 삭제 이벤트),
      onChange(입력 이벤트),
      optionsArr,
      addProductOptionArr
   */

  const onClick = (e, type) => {
    switch (type) {
      case 'addOptionSet':
        setOptionSetIdx(optionSetIdx + 1);
        setOptionSetArr([...optionSetArr, optionItemProps]);
        // 옵션 세트 추가
        break;
      case 'addOption':
        // 옵션추가
        addOptions(e.target.name);
        break;
      case 'addProductOption':
        // 추가 옵션 상품 등록
        break;
      case 'deleteOptionSet':
        // 옵션 세트 삭제
        break;
      default:
        break;
    }
  };

  const onInputChange = (e, type) => {
    const { value } = e.target;
    switch (type) {
      case 'normalPrice':
        break;

      default:
        break;
    }
  };

  const optionItemProps = {
    idx: optionSetIdx,
    img: '',
    onClick,
    optionsNum: 1,
    optionAttr: {
      optionName: '',
      normalPrice: '',
      salesPrice: '',
      stock: '',
      isTex: false,
      onInputChange,
    },
  };

  const addOptionSetItem = (list) => {
    // 삭제버튼
    // 이미지 + 옵션
    if (list.length === 0) return `옵션세트를 추가하여 옵션을 구성해주세요`;
    else {
      const setList = list.map((item) => {
        <OptionSetItem>
          <button
            name={item.idx}
            onClick={(e) => onClick(e, 'deleteOptionSet')}
          >
            삭제
          </button>
          <OptionSet attr={item.optionAttr} />
        </OptionSetItem>;
      });
      return <>{setList}</>;
    }
  };

  const addOptions = (index) => {
    const options = optionSetArr.reduce((acc, value) => {
      if (value.idx === index) {
        acc.push({
          idx: value.idx,
          img: value.img,
          onClick,
          optionsNum: value.optionNum + 1,
          optionAttr: {
            optionName: value.optionName,
            normalPrice: value.normalPrice,
            salesPrice: value.salesPrice,
            stock: value.stock,
            isTex: value.isTex,
            onInputChange,
          },
        });
      }
      return acc;
    }, []);
    setOptionSetArr(options);
  };

  return (
    <ProductOptionStyled>
      <TitleBar>
        <h5>상품옵션</h5>
        <button name="addOptionSet" onClick={(e) => onClick(e, 'addOptionSet')}>
          + 옵션 세트 추가
        </button>
      </TitleBar>
      <FormList>{addOptionSetItem(optionSetArr)}</FormList>
    </ProductOptionStyled>
  );
}
