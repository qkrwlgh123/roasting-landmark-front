import { styled } from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsLayout = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
`;

export default { Layout, ContentsLayout };
