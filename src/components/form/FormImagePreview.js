import styled from 'styled-components';
import React, { useState } from 'react';

const AddImageButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.subBgColor};
  background-position: center;
  background-size: cover;
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
`;

const AddImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 170px;
  height: 40px;
  background-color: ${({ theme }) => theme.subBgColor};
  border: 1px solid ${({ theme }) => theme.pointColor};
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
`;

const AddImageButtonInput = styled.input`
  position: absolute;
  width: 170px;
  height: 40px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

export default function FormImagePreview() {
  const [preview, setPreview] = useState({});
  const onasdChange = (e) => {
    if (!e.target.files[0].type.match('image/.*')) {
      alert('이미지 확장자만 업로드 가능합니다.');
      return;
    }
    setPreview((oldPreveiw) => {
      const src = URL.createObjectURL(e.target.files[0]);
      const newPreview = { name: e.target.files[0].name, src: src };
      return newPreview;
    });
  };
  return (
    <AddImageButtonWrapper imageSrc={preview.src}>
      <AddImageButton htmlFor="preview">+ 이미지 첨부</AddImageButton>
      <AddImageButtonInput
        type="file"
        accept="image/*"
        id="preview"
        onChange={onasdChange}
      />
      {/* <Image src={preview.src} /> */}
    </AddImageButtonWrapper>
  );
}
