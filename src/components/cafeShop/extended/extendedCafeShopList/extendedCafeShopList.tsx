import { CafeShopType } from '../../../../types/cafeShop';
import ExtendedCafeShop from '../extendedCafeShop/extendedCafeShop';
import Style from './extendedCafeShopList.style';

const ExtendedCafeShopList = ({
  myCreatedList,
}: {
  myCreatedList: CafeShopType[];
}) => {
  return (
    <Style.ListContainer>
      {myCreatedList.map((shop) => (
        <ExtendedCafeShop shop={shop} key={shop.id} />
      ))}
    </Style.ListContainer>
  );
};

export default ExtendedCafeShopList;
