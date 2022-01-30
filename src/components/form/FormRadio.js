import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0px 0px 10px;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

export default function FormRadio({ attr, radio }) {
  const { width, height, onClick } = attr;
  return (
    <>
      {radio.map((e, index) => (
        <Container key={index}>
          <Radio
            id={e.id}
            name={e.name}
            value={e.value}
            defaultChecked={e.defaultChecked}
            onClick={onClick}
            width={width}
            height={height}
            readOnly
          />
          <Label htmlFor={e.id} onClick={onClick}>
            {e.text}
          </Label>
        </Container>
      ))}
    </>
  );
}
