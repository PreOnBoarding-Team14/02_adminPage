import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 20px;
  margin: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  position: absolute;
  ${(props) => (props.isClick ? 'right: 0;' : 'left: 0;')};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.isClick ? '#2A18BD;' : 'gray;')};
  background: ${(props) => (props.isClick ? '#2A18BD;' : 'white;')};
`;

const ToggleBackground = styled.div`
  width: 35px;
  height: 15px;
  border-radius: 100px;
  background: ${(props) => (props.isClick ? '#AEA8E6;' : '#9F9F9F;')};
`;

export default function FormToggle({ isClick, setIsClick }) {
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
