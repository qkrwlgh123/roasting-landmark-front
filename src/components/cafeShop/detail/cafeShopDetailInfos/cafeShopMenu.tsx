import { CafeShopMenuType, CafeShopType } from '../../../../types/cafeShop';
import CafeShopDetailInfosLayout from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout';
import {
  CategoriesContainer,
  CategoryBox,
  ContentBox,
  MenuContainer,
  MenuInfoBox,
  SubjectBox,
} from './cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';

const CafeShopMenu = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  return (
    <CafeShopDetailInfosLayout>
      <CategoriesContainer>
        <CategoryBox>
          <SubjectBox>
            <span>메뉴</span>
          </SubjectBox>
          <MenuContainer>
            {detailInfo?.menu?.map((menu: CafeShopMenuType) => (
              <MenuInfoBox>
                <span>{menu.food}</span>
                <span>
                  {menu.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </span>
              </MenuInfoBox>
            ))}
          </MenuContainer>
        </CategoryBox>
      </CategoriesContainer>
    </CafeShopDetailInfosLayout>
  );
};

export default CafeShopMenu;
