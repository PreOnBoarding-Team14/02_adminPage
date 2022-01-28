import styled from 'styled-components';
import { FormInput } from 'components';

const SecondRow = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
  font-size: ${({ theme }) => theme.bigFontSize};
`;

export default function InputBar({ placeholder }) {
  return (
    <SecondRow style={{ padding: '20px 10px' }}>
      <InputContainer>
        <FormInput attr={{ placeholder }} />
      </InputContainer>
    </SecondRow>
  );
}
