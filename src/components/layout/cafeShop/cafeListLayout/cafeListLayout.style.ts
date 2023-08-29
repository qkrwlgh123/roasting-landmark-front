import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const ContentsLayout = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 28px;
  width: 100%;
  max-width: 1300px;
`;

export default { Layout, ContentsLayout };
