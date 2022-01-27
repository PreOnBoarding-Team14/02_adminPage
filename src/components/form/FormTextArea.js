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
    ></TextArea>
  );
}

// export default function FormTextArea({ attrs }) {
//   const { height = '200px', data } = attrs;
//   return (
//     <TextArea
//       style={{
//         height: attrs.height,
//         borderRadius: attrs.borderRadius,
//         justifyContent: data ? 'flex-start' : 'center',
//         alignItems: data ? 'flex-start' : 'center',
//       }}
//     >
//       {data?.map((item) => (
//         <FilterBox>
//           <FilterWord>{item}</FilterWord>
//           <CancleBtn>X</CancleBtn>
//         </FilterBox>
//       ))}
//       {!data && <NoSearch>검색 결과가 존재하지 않습니다.</NoSearch>}
//     </TextArea>
//   );
// }
