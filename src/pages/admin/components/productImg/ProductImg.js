import React from 'react';

import { FormAddImg } from 'components';

export default function ProductImg() {
  return (
    <>
      <FormAddImg AddImgType="상품 소개 이미지" InputId="id1" />
      <FormAddImg AddImgType="구매자 추천 이미지" InputId="id2" />
    </>
  );
}
