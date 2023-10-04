import styled from 'styled-components';

const CafeShopBox = styled.div<{ expanded: boolean }>`
  display: flex;
  width: 700px;
  height: ${(props) => (props.expanded ? 'auto' : '300px')};
  border-bottom: 1px solid #e5e8ec;
  padding-top: 30px;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 90%;
    height: ${(props) => (props.expanded ? 'auto' : '30%')};
  }
`;

const RepresentImageBox = styled.div`
  width: 35%;
  height: 230px;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 100%;
    max-height: 100%;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RightSideAreaBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const TitleText = styled.span`
  font-size: 30px;
  cursor: pointer;
  color: #383b40;
  font-weight: 500;
  @media (max-width: 720px) {
    display: inline-block;
    margin-top: 10px;
    font-size: 20px;
  }
`;

const RateText = styled(TitleText)`
  color: #c9612d;
  margin-left: 10px;
`;

const AddressTextBox = styled.div`
  cursor: pointer;
  span {
    color: #383b40;
    font-weight: 300;
  }
  margin: 15px 0;
  @media (max-width: 720px) {
    display: inline-block;
    margin-top: -5px;
    font-size: 17px;
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
  color: #383b40;
  font-weight: 700;
  margin-right: 5px;
`;

const NoReviewText = styled.span`
  color: #383b40;
  font-weight: 500;
`;

const EditButtonBox = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  color: #383b40;
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
  NoReviewText,
  EditButtonBox,
};
