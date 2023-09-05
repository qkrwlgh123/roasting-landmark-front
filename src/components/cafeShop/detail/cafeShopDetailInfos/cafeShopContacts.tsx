import { CafeShopType } from '../../../../types/cafeShop';
import CafeShopDetailInfosLayout from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout';
import {
  CategoriesContainer,
  CategoryBox,
  ContentBox,
  ParcelAddressBox,
  SubjectBox,
} from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';

const CafeShopContacts = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  return (
    <CafeShopDetailInfosLayout>
      <CategoriesContainer>
        <CategoryBox>
          <SubjectBox>
            <span>주소</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.roadAddress}</span>
            <ParcelAddressBox>
              <div>
                <span>지번</span>
              </div>
              <span>{detailInfo?.parcelAddress}</span>
            </ParcelAddressBox>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>전화번호</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.telNumber}</span>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>주차</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.parkingType}</span>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>영업시간</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.openTime}</span>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>브레이크 타임</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.breakTime}</span>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <SubjectBox>
            <span>휴일</span>
          </SubjectBox>
          <ContentBox>
            <span>{detailInfo?.holiday}</span>
          </ContentBox>
        </CategoryBox>
      </CategoriesContainer>
    </CafeShopDetailInfosLayout>
  );
};

export default CafeShopContacts;
