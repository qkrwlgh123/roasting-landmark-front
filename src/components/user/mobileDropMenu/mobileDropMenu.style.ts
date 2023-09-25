import styled from 'styled-components';

const MobileMenuBox = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIconBox = styled.div`
  margin-right: 15px;
`;

const SearchComponent = styled.div`
  position: fixed;
  top: 10px;
  right: 5px;
`;

export default { MobileMenuBox, SearchIconBox, SearchComponent };
