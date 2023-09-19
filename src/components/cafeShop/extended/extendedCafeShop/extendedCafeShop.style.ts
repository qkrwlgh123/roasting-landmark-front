import styled from 'styled-components';

const CafeShopBox = styled.div`
  display: flex;
  width: 700px;
  height: 300px;

  border-bottom: 1px solid #e5e8ec;
  padding-top: 30px;
`;

const RepresentImageBox = styled.div`
  width: 35%;
  height: 80%;
  margin-right: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const RightSideAreaBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
`;

const TitleText = styled.span`
  font-size: 30px;
  cursor: pointer;
`;

const RateText = styled(TitleText)`
  color: #c9612d;
  margin-left: 10px;
`;

const AddressTextBox = styled.div`
  margin: 15px 0;
  span {
    font-weight: 300;
  }
`;

const ReviewBox = styled.div`
  display: flex;
`;

const ReviewDownsideAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55%;
`;

const ReviewUserProfileImageBox = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
  }
`;

const ReviewUsername = styled.span`
  font-weight: 800;
  margin-right: 5px;
`;

const EditButtonBox = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

export default {
  CafeShopBox,
  RepresentImageBox,
  RightSideAreaBox,
  TitleText,
  RateText,
  AddressTextBox,
  ReviewBox,
  ReviewDownsideAreaBox,
  ReviewUserProfileImageBox,
  ReviewUsername,

  EditButtonBox,
};
