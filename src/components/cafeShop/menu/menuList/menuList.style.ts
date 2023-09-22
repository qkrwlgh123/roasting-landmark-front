import styled from 'styled-components';
const ListBox = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr); /* 2열 그리드를 생성합니다. */
  margin: -20px 0 30px 0;
  grid-row-gap: 5px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export default { ListBox };
