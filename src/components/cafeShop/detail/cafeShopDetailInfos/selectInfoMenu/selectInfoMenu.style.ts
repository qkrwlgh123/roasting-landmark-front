import styled from 'styled-components';

const InfoMenuContainer = styled.nav`
  ul {
    display: flex;
  }
  width: 75%;
  padding-top: 60px;
  border-bottom: 1px solid black;
`;

const InfoMenu = styled.li<{ isselected: boolean }>`
  cursor: pointer;
  margin-right: 1.2rem;
  padding-bottom: 10px;
  color: ${(props) => (props.isselected ? 'blue' : 'black')};
  border-bottom: ${(props) =>
    props.isselected ? '3px solid blue' : undefined};
  font-weight: ${(props) => (props.isselected ? 700 : 400)};
`;

export default { InfoMenuContainer, InfoMenu };
