import styled from 'styled-components';

const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;

const FoodTitle = styled.div`
  width: 30%;
`;

const PriceTitle = styled.div`
  width: 40%;
`;

const ConnectLine = styled.div`
  border-bottom: 1px dashed #d8d8d8;
  width: 40%;
  margin: 0 20px 10px 20px;
`;

const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 5px;
  margin-bottom: 8px;
`;
export default { MenuBox, FoodTitle, PriceTitle, ConnectLine, DeleteBox };
