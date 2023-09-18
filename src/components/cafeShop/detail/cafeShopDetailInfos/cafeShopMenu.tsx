import { CafeShopMenuType, CafeShopType } from '../../../../types/cafeShop';
import MenuList from '../../menu/menuList/menuList';
import CafeShopDetailInfosLayout from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout';
import {
  CategoriesContainer,
  CategoryBox,
  ContentBox,
  DescriptionContainer,
  DescriptionSubjectBox,
  MenuContainer,
  MenuInfoBox,
  SubjectBox,
} from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';

const CafeShopMenu = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  return (
    <CafeShopDetailInfosLayout>
      <DescriptionContainer>
        <DescriptionSubjectBox>메뉴</DescriptionSubjectBox>
      </DescriptionContainer>
      <CategoriesContainer>
        <CategoryBox>
          <div style={{ width: '120%' }}>
            <MenuList menuList={detailInfo?.menu!} />
          </div>
        </CategoryBox>
      </CategoriesContainer>
    </CafeShopDetailInfosLayout>
  );
};

export default CafeShopMenu;
