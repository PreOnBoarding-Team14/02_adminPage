import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  background-color: none;
  border-radius: ${({ theme }) => theme.bigRadius};
  &::placeholder {
    background-color: none;
    border: none;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export default function FormInput({ attr }) {
  const { placeholder, minLength, maxLength, onChange } = attr;
  return (
    <Input
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}
