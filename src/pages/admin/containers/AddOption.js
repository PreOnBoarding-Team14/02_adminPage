import React from 'react';
import { FormSelect } from 'components';

export default function AddOption({ attr }) {
  const {
    onInputChange,
    salesPrice,
    normalPrice,
    onClick,
    optionSetIdx,
    isTex,
  } = attr;

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
      // selected: true,
      disabled: false,
    },
    {
      value: '과세',
      name: '과세',
      // selected: false,
      disabled: false,
    },
  ];

  const getDiscountRate = () => {
    const discountPrice = Math.floor(salesPrice / normalPrice);
    return discountPrice < 1 ? `${discountPrice} %` : '할인율 없음';
  };

  return (
    <>
      <button>삭제</button>
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
        <label>{getDiscountRate}</label>
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
      <button onClick={(e) => onClick(e, 'addOptionProduct')}>
        + 추가 옵션 상품 등록
      </button>
    </>
  );
}
