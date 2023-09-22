import styled from 'styled-components';

const DetailInfoWholeArea = styled.div`
  display: flex;

  width: 75%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DetailLeftAreaContainer = styled.div`
  width: 75%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const DetailLocationAreaContainer = styled.div`
  width: 30%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const DetailLocationBox = styled.div`
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  padding: 40px;
  border-radius: 12px;
  @media (max-width: 800px) {
    padding: 0;
    box-shadow: none;
  }
`;

export default {
  DetailInfoWholeArea,
  DetailLeftAreaContainer,
  DetailLocationAreaContainer,
  DetailLocationBox,
};
