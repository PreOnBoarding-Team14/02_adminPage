import styled from 'styled-components';

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.subBgColor};
  width: 100%;
  height: 100%;
  line-height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.subBgColor};
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
`;

export default function FormTextArea({ attrs }) {
  const { name, placeholder, onChange, rows = 2, cols = 2 } = attrs;
  return (
    <TextArea
      type="text"
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
