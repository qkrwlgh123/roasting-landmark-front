import styled from 'styled-components';

const LoadingBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const LoadingBox = styled.div`
  position: absolute;
  top: calc(50vh);
  left: calc(50vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default { LoadingBackground, LoadingBox };
