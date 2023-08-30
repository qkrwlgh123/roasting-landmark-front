import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: gray;
  border: 1px solid white;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 14px;
  span {
    color: white;
  }
`;

export default { MenuContainer, MenuBox };
