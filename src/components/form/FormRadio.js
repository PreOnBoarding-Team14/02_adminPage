import styled from 'styled-components';

const Radio = styled.input.attrs({ type: 'radio' })`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default function FormRadio({ attr, radio }) {
  const { width, height, onClick } = attr;
  return (
    <>
      {radio.map((e, index) => (
        <div key={index}>
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
          <label htmlFor={e.id} onClick={onClick}>
            {e.text}
          </label>
        </div>
      ))}
    </>
  );
}
