import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  white-space: normal;
  color: #383b40;
  font-weight: 300;
  pre {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

const ShowMoreButton = styled.button<{ $expanded: boolean }>`
  display: ${(props) => (props.$expanded ? 'none' : 'flex')};
  color: #c9612d;
  font-size: 16px;
`;

export default { Container, ShowMoreButton };
