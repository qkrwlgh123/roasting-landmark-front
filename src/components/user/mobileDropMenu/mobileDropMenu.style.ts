import styled from 'styled-components';
const MobileMenuBox = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default { MobileMenuBox };
