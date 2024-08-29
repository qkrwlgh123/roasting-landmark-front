import styled from "styled-components";
const ListBox = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  margin: -20px 0 30px 0;
  grid-row-gap: 5px;
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export default { ListBox };
