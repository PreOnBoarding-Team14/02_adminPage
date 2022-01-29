import styled from 'styled-components';
import React, { useState } from 'react';

const AddImageWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const TopText = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const BottomContent = styled.div`
  display: flex;
  min-height: 60px;
`;

const AddImageButtonWrapper = styled.div``;

const AddImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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

export default function FormAddOneImg({ AddImgType, InputId }) {
  const [imgName, setImgName] = useState([]);

  const handleChangeFile = (event) => {
    setImgName([]);
    const pushArr = [];
    pushArr.push(event.target.files[0].name);
    setImgName(pushArr);
  };

  const deleteImg = (ele) => {
    const deletedArr = imgName.filter((element) => element !== ele);
    setImgName(deletedArr);
  };

  return (
    <AddImageWrapper>
      <TopText style={{ display: AddImgType ? 'visible' : 'none' }}>
        {AddImgType}
      </TopText>
      <BottomContent>
        <AddImageButtonWrapper>
          <AddImageButton htmlFor={InputId}>+ 이미지 추가</AddImageButton>
          <AddImageButtonInput
            type="file"
            accept="image/*"
            id={InputId}
            onChange={handleChangeFile}
          />
        </AddImageButtonWrapper>
        <NameAndDeleteWrapper>
          {imgName.map((ele, idx) => (
            <NameAndDelete key={idx}>
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
