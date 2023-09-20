import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: #ffffff;
  border: 1px solid white;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  padding: 5px;
  border-radius: 4px;
  z-index: 999;
  @media (max-width: 1000px) {
    right: 10px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 14px;
  span {
    color: #ffffff;
  }
`;

export default { MenuContainer, MenuBox };
