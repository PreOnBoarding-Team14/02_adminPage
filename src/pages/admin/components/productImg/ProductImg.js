import React, { useState } from 'react';
import styled from 'styled-components';
import { FormToggle, FormAddImg } from 'components';

export default function ProductImg() {
  const [imgNames, setImgNames] = useState([]);
  return (
    <>
      <FormAddImg
        AddImgType="상품 소개 이미지"
        state={imgNames}
        setState={setImgNames}
      />
      <FormAddImg AddImgType="구매자 추천 이미지" />
      <FormToggle />
    </>
  );
}
