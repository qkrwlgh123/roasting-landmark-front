import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const ContentsLayout = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
`;

export default { Layout, ContentsLayout };
