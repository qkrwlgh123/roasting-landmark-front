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

const Overlay = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 어두운 배경색과 투명도 설정 */
  z-index: 1000; /* 다른 요소 위에 오게 설정 */
`;

export default { Layout, ContentsLayout, Overlay };
