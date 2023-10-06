import { Link, useNavigate } from 'react-router-dom';
import { CafeShopType } from '../../../../types/cafeShop';
import Style from './extendedCafeShop.style';
import TextBlock from './textBlock/textBlock';
import { useState } from 'react';

const ExtendedCafeShop = ({ shop }: { shop: CafeShopType }) => {
  const lastestReview = shop?.shop_review
    ? shop?.shop_review[shop?.shop_review.length - 1]
    : undefined;

  const navigate = useNavigate();
  const handleLinkToDetailPage = () => {
    navigate(`/cafeShopDetail/${shop?.id}`);
  };

  const [expanded, setExpanded] = useState(false);

  const handleShowMore = () => {
    setExpanded(true);
  };

  return (
    <Style.CafeShopBox $expanded={expanded}>
      <Style.RepresentImageBox onClick={handleLinkToDetailPage}>
        <img src={shop?.images[0]} alt="대표_이미지" />
      </Style.RepresentImageBox>

      <Style.RightSideAreaBox>
        <div>
          <Style.TitleText onClick={handleLinkToDetailPage}>
            {shop.shopName}
          </Style.TitleText>
          <Style.RateText>{shop.rate?.toFixed(1)}</Style.RateText>
        </div>
        <Style.AddressTextBox>
          <span>{shop.roadAddress}</span>
        </Style.AddressTextBox>
        <Style.ReviewDownsideAreaBox>
          <Style.ReviewBox>
            {lastestReview ? (
              <>
                <Style.ReviewUserProfileImageBox>
                  <img src={lastestReview?.profileImage} alt="프로필_이미지" />
                </Style.ReviewUserProfileImageBox>
                <Style.ReviewUsername>
                  {lastestReview?.username}
                </Style.ReviewUsername>
                <TextBlock
                  text={lastestReview?.content}
                  expanded={expanded}
                  handleShowMore={handleShowMore}
                />
              </>
            ) : (
              <Style.NoReviewText>
                최근 작성된 후기가 없습니다
              </Style.NoReviewText>
            )}
          </Style.ReviewBox>
          {shop?.isCreator ? (
            <Style.EditButtonBox>
              <span>정보 수정</span>
            </Style.EditButtonBox>
          ) : null}
        </Style.ReviewDownsideAreaBox>
      </Style.RightSideAreaBox>
    </Style.CafeShopBox>
  );
};

export default ExtendedCafeShop;
