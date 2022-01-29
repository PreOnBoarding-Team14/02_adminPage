import styled from 'styled-components';
import React, { useState } from 'react';

const AddImageWrapper = styled.div`
  width: 100%;
`;

const BottomContent = styled.div`
  display: flex;
  min-height: 140px;
`;

const AddImageButtonWrapper = styled.div``;

const AddImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.pointColor};
  cursor: pointer;
`;

const AddImageButtonInput = styled.input`
  position: absolute;
  width: 170px;
  height: 40px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

const NameAndDeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameAndDelete = styled.div`
  display: flex;
  align-items: center;
  margin: 13px;
  height: 30px;
`;

const ImageFileName = styled.div`
  margin-right: 10px;
`;

const ImageDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  cursor: pointer;
`;

export default function AddImage() {
  const [imgNames, setImgNames] = useState([]); // 파일 base64

  const handleChangeFile = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      if (imgNames.includes(event.target.files[i].name)) {
        imgNames = imgNames.filter(
          (element) => element !== event.target.files[i].name
        );
        console.log(imgNames);
        imgNames.unshift(event.target.files[i].name);
      } else {
        imgNames.unshift(event.target.files[i].name);
      }
    }
    setImgNames((imgNames) => [...imgNames]);
  };

  const deleteImg = (ele) => {
    const deletedArr = imgNames.filter((element) => element !== ele);
    setImgNames(deletedArr);
  };
  return (
    <AddImageWrapper>
      <BottomContent>
        <AddImageButtonWrapper>
          <AddImageButton for="ex_file">+ 이미지 추가</AddImageButton>
          <AddImageButtonInput
            type="file"
            accept="image/*"
            id="ex_file"
            multiple="multiple"
            onChange={handleChangeFile}
          />
        </AddImageButtonWrapper>
        <NameAndDeleteWrapper>
          {imgNames.map((ele, idx) => (
            <NameAndDelete key={ele}>
              <ImageFileName>{ele}</ImageFileName>
              <ImageDeleteButton onClick={() => deleteImg(ele)}>
                x
              </ImageDeleteButton>
            </NameAndDelete>
          ))}
        </NameAndDeleteWrapper>
      </BottomContent>
    </AddImageWrapper>
  );
}
