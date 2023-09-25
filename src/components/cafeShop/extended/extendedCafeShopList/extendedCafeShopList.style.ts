import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    align-items: center;
  }
`;

export default { ListContainer };
