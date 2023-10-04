import styled from 'styled-components';

const CloseIconBox = styled.div<{ isDark?: boolean }>`
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
  z-index: 10;

  background-color: ${(props) => (props.isDark ? 'gray' : 'undefined')};
  display: ${(props) => (props.isDark ? 'flex' : 'undefined')};
  padding: ${(props) => (props.isDark ? '5px' : 'undefined')};
  border-radius: ${(props) => (props.isDark ? '50%' : 'undefined')};
  &:hover {
    background-color: ${(props) => props.isDark && '#ffffff'};
  }
  transition: background-color 0.3s ease;
`;

export default { CloseIconBox };
