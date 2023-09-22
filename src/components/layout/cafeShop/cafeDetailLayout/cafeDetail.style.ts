import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const ContentsLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default { Layout, ContentsLayout };
