import { useEffect, useState } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid darkgray;
  border-radius: 50%;
  outline: none;
  ::before {
    content: '';
    display: block;
    width: 70%;
    height: 70%;
    margin: 16%;
    border-radius: 50%;
  }
  &:checked::before {
    background: #342f6a;
  }
`;

export default function FormRadio({ text }) {
  const [check, setCheck] = useState(false);
  // const RadioClick = () => {
  //   setCheck((curr) => !curr);
  // };
  useEffect(() => {
    if (text === '제한 없음') {
      setCheck(true);
    }
  }, [text]);
  return (
    <RadioWrapper>
      <Radio id="radio" checked={check} />
      <label htmlFor="radio">{text}</label>
    </RadioWrapper>
  );
}
