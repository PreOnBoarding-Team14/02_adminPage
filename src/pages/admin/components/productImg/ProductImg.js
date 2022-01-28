import styled from 'styled-components';
import FormAddImg from '../../../../components/form/FormAddImg';
import { FormToggle } from 'components';

export default function ProductImg() {
  return (
    <>
      <FormAddImg AddImgType="상품 소개 이미지" />
      <FormAddImg AddImgType="구매자 추천 이미지" />
      <FormToggle />
    </>
  );
}
