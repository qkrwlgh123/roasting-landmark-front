import styled from 'styled-components';

const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 동일한 너비의 열을 생성 */
  gap: 20px; /* 열과 열 사이의 간격 */
  padding: 20px;
`;

export default { ListBox };
