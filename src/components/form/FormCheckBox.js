import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.input`
  width: 25px;
  flex-direction: column;
  height: 25px;
  display: flex;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const CheckAndText = styled.div`
<<<<<<< HEAD
  margin-bottom: 20px;
=======
  margin-bottom: 10px;
>>>>>>> d28f4d45ecb4944360ed6f3a8c6204fa8ab11e3a
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 10px;
`;

export default function FormCheckBox({ attrs }) {
<<<<<<< HEAD
  const { name, data, onChange } = attrs;
  //console.log(isCheck[0]);
  //console.log(data);
=======
  const { name, data } = attrs;
>>>>>>> d28f4d45ecb4944360ed6f3a8c6204fa8ab11e3a

  return (
    <form>
      {data.map((item, idx) => (
        <Label key={idx}>
          <CheckAndText>
<<<<<<< HEAD
            <CheckBox
              onChange={onChange}
              type="checkbox"
              value={item.value}
              name={name}
              checked={item.checked}
            />
            <Text>{item.value}</Text>
=======
            <CheckBox type="checkbox" value={item} name={name} />
            <Text>{item}</Text>
>>>>>>> d28f4d45ecb4944360ed6f3a8c6204fa8ab11e3a
          </CheckAndText>
        </Label>
      ))}
    </form>
  );
}
