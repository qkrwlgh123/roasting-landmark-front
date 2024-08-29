import { CafeShopType } from "../../../../types/cafeShop";
import MenuList from "../../menu/menuList/menuList";
import CafeShopDetailInfosLayout from "./cafeShopDetailInfosLayout/cafeShopDetailInfosLayout";
import {
  CategoriesContainer,
  CategoryBox,
  DescriptionContainer,
  DescriptionSubjectBox,
} from "./cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style";

const CafeShopMenu = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  return (
    <CafeShopDetailInfosLayout>
      <DescriptionContainer>
        <DescriptionSubjectBox>주요 메뉴</DescriptionSubjectBox>
      </DescriptionContainer>
      <CategoriesContainer>
        <CategoryBox>
          <div style={{ width: "120%" }}>
            <MenuList menuList={detailInfo?.menu!} />
          </div>
        </CategoryBox>
      </CategoriesContainer>
    </CafeShopDetailInfosLayout>
  );
};

export default CafeShopMenu;
