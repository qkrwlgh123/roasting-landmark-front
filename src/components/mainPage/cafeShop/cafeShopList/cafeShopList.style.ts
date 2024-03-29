import styled from 'styled-components';

const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  gap: 40px; /* 열과 열 사이의 간격 */
  padding: 20px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  }
`;

export default { ListBox };
