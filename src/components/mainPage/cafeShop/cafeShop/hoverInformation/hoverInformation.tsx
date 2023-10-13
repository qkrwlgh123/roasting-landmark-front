import { CafeShopType } from '../../../../../types/cafeShop';
import { HoverInfoBox } from '../cafeShop.style';
import Style from './hoverInformation.style';
import StarOffIcon from '../../../../../assets/svg/star_off.svg';
import StarOnIcon from '../../../../../assets/svg/star_on.svg';

const HoverInformation = ({ shopInfos }: { shopInfos: CafeShopType }) => {
  const lastestReview = shopInfos?.shop_review
    ? shopInfos?.shop_review[shopInfos?.shop_review.length - 1]?.content
    : undefined;

  return (
    <HoverInfoBox>
      <Style.HoverInnerBox>
        <Style.TitleText>{shopInfos?.shopName}</Style.TitleText>
        <Style.KeywordsBox>
          {shopInfos?.keywords?.map((keyword) => (
            <span key={keyword}>#{keyword}&nbsp; </span>
          ))}
        </Style.KeywordsBox>
        <Style.ReviewBox>
          {lastestReview
            ? `"${
                lastestReview.length > 60
                  ? lastestReview.slice(0, 60) + '...'
                  : lastestReview
              }"`
            : '등록된 후기가 없습니다'}
        </Style.ReviewBox>
        <Style.RateBox>
          <div>
            <img
              src={shopInfos?.rate ? StarOnIcon : StarOffIcon}
              width="16px"
              alt="rate_icon"
            />
          </div>
          <div>
            <span>
              &nbsp;
              {shopInfos?.rate
                ? shopInfos?.rate?.toFixed(1)
                : '후기를 작성해주세요'}
            </span>
            <span>
              {shopInfos?.rate ? `(${shopInfos?.participants}명)` : ''}
            </span>
          </div>
        </Style.RateBox>
      </Style.HoverInnerBox>
    </HoverInfoBox>
  );
};

export default HoverInformation;
