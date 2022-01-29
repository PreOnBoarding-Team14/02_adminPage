import React, { useState } from 'react';
import ProductOptionStyled from '../components/productOption/ProductOptionStyled';

const { DeleteBtn, MoreOptionInput, MoreOptionWrapper, DiscountPrice } =
  ProductOptionStyled;

export default function MoreOption({ onEvent, moreOptionItemId }) {
  const [moreOptionProps, setMoreOptionProps] = useState({
    moreOptionName: '',
    moreOptionPrice: '',
  });

  const onChange = (e) => {
    e.preventDefault();
    setMoreOptionProps({ ...moreOptionProps, [e.target.name]: e.target.value });
  };

  return (
    <MoreOptionWrapper>
      <MoreOptionInput
        type="text"
        name="moreOptionName"
        onChange={onChange}
        placeholder="추가 옵션명 (필수)"
      />
      <MoreOptionInput
        type="number"
        name="moreOptionPrice"
        onChange={onChange}
        placeholder="추가 옵션 정상가 (필수)"
      />
      <DiscountPrice>원</DiscountPrice>
      <DeleteBtn
        onClick={(e) => onEvent(e, 'deleteMoreOption', moreOptionItemId)}
      >
        삭제
      </DeleteBtn>
    </MoreOptionWrapper>
  );
}
