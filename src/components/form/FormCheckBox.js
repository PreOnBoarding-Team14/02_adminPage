import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxAndCategory = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  width: 25px;
  height: 25px;
  background: ${(props) => (props.isCheck ? '#342F6A' : 'white')};
  border: 1px solid ${(props) => (props.isCheck ? '#342F6A' : 'gray')};
  border-radius: 5px;
`;

const CheckBox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`;

const CategoryName = styled.p``;

export default function FormCheckBox({ categoryName }) {
  const [isCheck, setIsCheck] = useState(false);

  const clickCheckBox = () => {
    setIsCheck(!isCheck);
  };

  console.log(isCheck);

  return (
    <CheckBoxAndCategory>
      <CheckBoxWrapper onClick={clickCheckBox} isCheck={isCheck}>
        <CheckBox isCheck={isCheck}>✔</CheckBox>
      </CheckBoxWrapper>
      <CategoryName>{categoryName}</CategoryName>
    </CheckBoxAndCategory>
  );
}
