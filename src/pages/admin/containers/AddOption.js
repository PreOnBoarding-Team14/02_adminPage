import React from 'react';
import { FormSelect } from 'components';

export default function AddOption({ attr }) {
  const {
    onInputChange,
    selectAttr,
    selectOptionList,
    salesPrice,
    normalPrice,
    onClick,
  } = attr;

  const getDiscountRate = () => {
    const discountPrice = Math.floor(salesPrice / normalPrice);
    return discountPrice < 1 ? `${discountPrice} %` : '할인율 없음';
  };

  return (
    <div>
      <button>삭제</button>
      <input
        type="text"
        placeholder="옵션명을 입력해 주세요. (필수)"
        onChange={(e) => onInputChange(e, 'optionName')}
      />
      <div>
        <input
          type="text"
          placeholder="상품 정상가 (필수)"
          onChange={(e) => onInputChange(e, 'normalPrice')}
        >
          원
        </input>
        {getDiscountRate}
        <input
          type="text"
          placeholder="상품 판매가 (필수)"
          onChange={(e) => onInputChange(e, 'salesPrice')}
        >
          원
        </input>
        <input type="text" placeholder="재고 (필수)">
          개
        </input>
        <FormSelect attr={selectAttr} option={selectOptionList} />
      </div>
      <button onClick={(e) => onClick(e, 'addOptionProduct')}>
        + 추가 옵션 상품 등록
      </button>
    </div>
  );
}
