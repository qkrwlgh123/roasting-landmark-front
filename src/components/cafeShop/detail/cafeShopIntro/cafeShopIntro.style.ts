import styled from 'styled-components';

const CafeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0 0 0;
  width: 75%;
`;

const CafeName = styled.span`
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 20px;
  margin: 0 10px 20px 0;
`;

const CafeRate = styled.span``;

export default { CafeInfoContainer, CafeName, CafeRate };
