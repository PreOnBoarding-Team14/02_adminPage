import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.input`
  width: 25px;
  flex-direction: column;
  height: 25px;
  display: flex;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const CheckAndText = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 10px;
`;

export default function FormCheckBox({ attrs }) {
  const { name, data, onChange } = attrs;

  return (
    <form>
      {data.map((item, idx) => (
        <Label key={idx}>
          <CheckAndText>
            <CheckBox
              onChange={onChange}
              type="checkbox"
              value={item.value}
              name={name}
              checked={item.checked}
            />
            <Text>{item.value}</Text>
          </CheckAndText>
        </Label>
      ))}
    </form>
  );
}
