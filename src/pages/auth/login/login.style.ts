import styled from 'styled-components';

const TitleBox = styled.div`
  font-size: 30px;
  margin-bottom: 70px;
  color: #383b40;
  font-weight: 500;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const ButtonsBox = styled.div`
  div {
    cursor: pointer;
  }
`;

export default { TitleBox, ButtonsBox };
