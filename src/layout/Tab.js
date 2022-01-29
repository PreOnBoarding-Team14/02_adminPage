import styled from 'styled-components';

const Items = styled.ul`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 17px;
  font-weight: 600;
`;

const Item = styled.li`
  cursor: pointer;
`;

export default function Tab({ title }) {
  return (
    <Items>
      <Item>{title}</Item>
      <Item>
        <i className="fas fa-chevron-down" />
      </Item>
    </Items>
  );
}
