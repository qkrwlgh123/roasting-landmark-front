import styled from 'styled-components';

const MenuBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const FoodTitle = styled.div`
  width: 30%;
  color: #383b40;
  font-weight: 300;
`;

const PriceTitle = styled.div`
  width: 30%;
  color: #383b40;
  font-weight: 500;
`;

const ConnectLine = styled.div`
  border-bottom: 1px dashed #d8dadd;
  min-width: 40%;
  margin: 0 30px 0 -10px;
`;

const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 50px;
  margin-bottom: 8px;
  color: #383b40;
  font-weight: 300;
`;
export default { MenuBox, FoodTitle, PriceTitle, ConnectLine, DeleteBox };
