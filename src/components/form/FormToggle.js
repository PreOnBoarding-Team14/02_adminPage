import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 20px;
  margin: 20px 0px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  position: absolute;
  ${(props) => (props.isClick ? 'right: 0;' : 'left: 0;')};
  width: 22px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: transform 0.2s linear;
  background-color: blue;

  ${(attr) =>
    attr.checked &&
    css`
       {
        transform: translateX(24px);
      }
    `};

const ToggleBackground = styled.div`
  width: 35px;
  height: 15px;
  border-radius: 100px;
  background: ${(props) => (props.isClick ? '#AEA8E6;' : '#9F9F9F;')};
`;

export default function FormToggle() {
  const [isClick, setIsClick] = useState(false);
  const clickToggle = () => {
    setIsClick(!isClick);
  };
  return (
    <ToggleWrapper onClick={clickToggle}>
      <ToggleCircle isClick={isClick} />
      <ToggleBackground isClick={isClick} />
    </ToggleWrapper>
  );
}
