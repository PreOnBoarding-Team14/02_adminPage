import React, { useState } from 'react';
import { FormSelect } from 'components';
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

const selectAttr = [
  {
    width: '100px',
    height: '30px',
    defaultValue: '비과세',
  },
];

const selectOptionList = [
  {
    value: '비과세',
    name: '비과세',
    disabled: false,
  },
  {
    value: '과세',
    name: '과세',
    disabled: false,
  },
];

export default function ProductOption() {
  const [optionSetArr, setOptionSetArr] = useState([]);
  const [optionSetIdx, setOptionSetIdx] = useState(0);

  const onClick = (e, type, optionIdx) => {
    switch (type) {
      case 'addOptionSet':
        setOptionSetIdx(optionSetIdx + 1);
        setOptionSetArr([...optionSetArr, optionItemProps]);
        // 옵션 세트 추가
        break;
      case 'addOption':
        // 옵션추가
        addOptions(optionIdx);
        break;
      case 'addProductOption':
        // 추가 옵션 상품 등록
        addMoreOptionProduct(optionIdx);
        break;
      case 'deleteOptionSet':
        deleteOptionSet(optionIdx);
        // 옵션 세트 삭제
        break;
      case 'deleteOptionItem':
        // deleteOptionItem(optionIdx);
        break;
      default:
        break;
    }
  };

  const onInputChange = (e, type, optionSetIdx) => {
    const { value } = e.target;
    switch (type) {
      case 'normalPrice':
        console.log(value);
        changeOptionContent(optionSetIdx, type, value);
        break;
      case 'salesPrice':
        console.log(value);
        changeOptionContent(optionSetIdx, type, value);
        break;
      case 'optionName':
        console.log(value);
        changeOptionContent(optionSetIdx, type, value);
        break;
      default:
        break;
    }
  };

  const optionItemProps = {
    optionSetIdx,
    img: '',
    onClick,
    onInputChange,
    optionsNum: 1,
    optionArr: [
      {
        optionName: '',
        normalPrice: '',
        salesPrice: '',
        stock: '',
        isTex: false,
        moreOptionArr: [
          {
            moreOptionName: '',
            moreOptionNormalPrice: '',
          },
        ],
      },
    ],
  };

  const addOptionSetItem = (list) => {
    if (list.length === 0) return `옵션세트를 추가하여 옵션을 구성해주세요`;
    else {
      return list.map((item, idx) => (
        <OptionSetItem key={idx}>
          <button
            name={item.idx}
            onClick={(e) => onClick(e, 'deleteOptionSet', item.optionSetIdx)}
          >
            삭제
          </button>
          <div>
            <button>+ 이미지 첨부</button>
            {getOptionItem(optionSetArr)}
          </div>
          <button name={optionSetIdx} onClick={(e) => onClick(e, 'addOption')}>
            + 옵션 추가
          </button>
        </OptionSetItem>
      ));
    }
  };

  const deleteOptionSet = (idx) => {
    const optionSetList = optionSetArr.filter((i) => i.optionSetIdx !== idx);
    setOptionSetArr(optionSetList);
  };

  const changeOptionContent = (idx, optionType, content) => {
    const changedOptionSet = optionSetArr.reduce((acc, value) => {
      if (value.optionSetIdx === idx) {
        acc.push({
          optionSetIdx: value.optionSetIdx,
          img: value.img,
          optionsNum: value.optionsNum,
          onClick,
          onInputChange,
          optionAttr: {
            ...value.optionAttr,
            [optionType]: content,
          },
        });
      }
      return acc;
    }, []);
    setOptionSetArr(changedOptionSet);
  };

  const addOptions = (index) => {
    const options = optionSetArr.reduce((acc, value) => {
      if (value.idx === index) {
        acc.push({
          optionSetIdx: value.optionSetIdx,
          img: value.img,
          onClick,
          onInputChange,
          optionsNum: value.optionsNum + 1,
          optionArr: [
            ...value.optionArr,
            {
              optionName: '',
              normalPrice: '',
              salesPrice: '',
              stock: '',
              isTex: false,
              moreOptionArr: value.moreOptionArr,
            },
          ],
        });
      } else {
        acc.push({
          optionSetIdx: value.optionSetIdx,
          img: value.img,
          onClick,
          onInputChange,
          optionsNum: value.optionsNum,
          optionArr: value.optionArr,
        });
      }
      return acc;
    }, []);
    setOptionSetArr(options);
  };

  const addMoreOption = (index) => {
    const options = optionSetArr.reduce((acc, value) => {
      if (value.idx === index) {
        acc.push({
          optionSetIdx: value.optionSetIdx,
          img: value.img,
          onClick,
          onInputChange,
          optionsNum: value.optionsNum + 1,
          optionArr: [
            ...value.optionArr,
            {
              optionName: '',
              normalPrice: '',
              salesPrice: '',
              stock: '',
              isTex: false,
              moreOptionArr: [
                ...value.optionArr.moreOptionArr,
                {
                  moreOptionName: '',
                  moreOptionNormalPrice: '',
                },
              ],
            },
          ],
        });
      } else {
        acc.push({
          optionSetIdx: value.optionSetIdx,
          img: value.img,
          onClick,
          onInputChange,
          optionsNum: value.optionsNum,
          optionArr: value.optionArr,
        });
      }
      return acc;
    }, []);
    setOptionSetArr(options);
  };

  const getDiscountRate = (salesPrice, normalPrice) => {
    const discountPrice = Math.floor(salesPrice / normalPrice);
    return discountPrice < 1 ? `${discountPrice} %` : '할인율 없음';
  };

  const getOptionItem = (listArr) => {
    return listArr.map((item, index) => (
      <div key={index}>
        <button
          onClick={(e) => onClick(e, 'deleteOptionItem', item.optionSetIdx)}
        >
          삭제
        </button>
        <input
          type="text"
          placeholder="옵션명을 입력해 주세요. (필수)"
          // onChange={(e) => onInputChange(e, 'optionName', optionSetIdx)}
        />
        <div>
          <input
            type="text"
            placeholder="상품 정상가 (필수)"
            // onChange={(e) => onInputChange(e, 'normalPrice', optionSetIdx)}
          />
          <span>원</span>
          <label>{getDiscountRate(item.salesPrice, item.normalPrice)}</label>
          <input
            type="text"
            placeholder="상품 판매가 (필수)"
            // onChange={(e) => onInputChange(e, 'salesPrice', optionSetIdx)}
          />
          <span>원</span>
          <input type="text" placeholder="재고 (필수)" />
          <span>개</span>
          <FormSelect attr={selectAttr} option={selectOptionList} />
        </div>
        <button onClick={(e) => onClick(e, 'addMoreOptionProduct')}>
          + 추가 옵션 상품 등록
        </button>
      </div>
    ));
  };

  const addMoreOptionProduct = () => {
    return (
      <div>
        {/* ㄴ 자 모양..? */}
        <input type="text" placeholder="추가 옵션명" />
        <input type="text" placeholder="추가 옵션 정상가" />
        <span>원</span>
        <button onClick={(e) => onClick(e, 'addMoreProductOption')}>
          삭제
        </button>
      </div>
    );
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
