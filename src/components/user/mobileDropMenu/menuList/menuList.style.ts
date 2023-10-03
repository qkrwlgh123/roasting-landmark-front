import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: #ffffff;

  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);

  border-radius: 4px;
  z-index: 999;
  @media (max-width: 1000px) {
    right: 10px;
  }
  color: #383b40;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;

  padding: 14px;
  &:hover {
    background-color: #c9612d;
    color: #ffffff;
  }
`;

export default { MenuContainer, MenuBox };
