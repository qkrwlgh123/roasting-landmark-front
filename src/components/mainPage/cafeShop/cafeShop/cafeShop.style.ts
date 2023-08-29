import styled from 'styled-components';

const CafeInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  span {
    display: inline-block;
    margin-top: 10px;
    font-weight: 800;
  }
`;

const CafeImageBox = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 14px;
  margin-right: 15px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 14px;
    height: 100%;
    object-fit: cover;
  }
`;

export default { CafeInfoBox, CafeImageBox };
