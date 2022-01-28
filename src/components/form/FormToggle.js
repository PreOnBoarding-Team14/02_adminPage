import styled, { css } from 'styled-components';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  display: none;
`;
const SwitchLabel = styled.label`
  position: relative;
  height: 26px;
  width: 50px;
  border-radius: 50px;
  background-color: gray;
`;

const Ball = styled.div`
  position: absolute;
  content: '';
  height: 22px;
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
`;

export default function FormToggle({ attr }) {
  const { title, checked, onChange } = attr;

  return (
    <>
      {!!title ? <label>{title}</label> : null}
      <SwitchCheckbox>
        <SwitchLabel type="checkbox" checked={checked} onChange={onChange} />
        <Ball />
      </SwitchCheckbox>
    </>
  );
}
