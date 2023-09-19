import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ShowMoreButton = styled.button<{ expanded: boolean }>`
  display: ${(props) => (props.expanded ? 'none' : 'flex')};
  color: #c9612d;
  font-size: 16px;
`;

export default { Container, ShowMoreButton };
