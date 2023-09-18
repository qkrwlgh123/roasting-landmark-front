import { CafeShopType } from '../../../../types/cafeShop';
import CafeShopDetailInfosLayout from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout';
import {
  CategoriesContainer,
  CategoryBox,
  ContentBox,
  DescriptionContainer,
  DescriptionSubjectBox,
  SubjectBox,
} from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';

const CafeShopDescription = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  return (
    <CafeShopDetailInfosLayout>
      <DescriptionContainer>
        <DescriptionSubjectBox>카페 소개</DescriptionSubjectBox>
      </DescriptionContainer>
      <CategoriesContainer>
        <CategoryBox>
          <SubjectBox>
            <span>디저트 종류</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.desertType}</span>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>가격대</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.priceRange}</span>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>웹 사이트</span>
          </SubjectBox>
          <ContentBox>
            <a href={detailInfo?.website} target="_blank">
              카페 홈페이지로 가기
            </a>
          </ContentBox>
        </CategoryBox>
      </CategoriesContainer>
    </CafeShopDetailInfosLayout>
  );
};

export default CafeShopDescription;
