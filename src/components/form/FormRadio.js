import styled from 'styled-components';

const Radio = styled.input.attrs({ type: 'radio' })`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default function FormRadio({ attr, radio }) {
  const { width, height, onClick } = attr;
  return (
    <>
      {radio.map((radio, index) => (
        <div key={index}>
          <Radio
            id={radio.name}
            value={radio.value}
            checked={radio.checked}
            onClick={onClick}
            width={width}
            height={height}
            readOnly
          />
          <label htmlFor={radio.name} onClick={onClick}>
            {radio.text}
          </label>
        </div>
      ))}
    </>
  );
}
