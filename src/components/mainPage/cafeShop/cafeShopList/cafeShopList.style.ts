import styled from 'styled-components';

const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  gap: 20px; /* 열과 열 사이의 간격 */
  padding: 20px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  }
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default { ListBox };
