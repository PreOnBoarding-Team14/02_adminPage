import React from 'react';
import styled from 'styled-components';
import { FormToggle, FormAddImg, FormAddOneImg } from 'components';

export default function ProductImg() {
  return (
    <>
      <FormAddImg AddImgType="구매자 추천 이미지" InputId="add1" />
      <FormAddImg AddImgType="구매자 추천 이미지12313" InputId="add2" />
      <FormToggle />
    </>
  );
}
