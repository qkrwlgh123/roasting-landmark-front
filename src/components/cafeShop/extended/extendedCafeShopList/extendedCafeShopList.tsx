import { CafeShopType } from '../../../../types/cafeShop';
import NotResult from '../../noResult/notResult';
import ExtendedCafeShop from '../extendedCafeShop/extendedCafeShop';
import Style from './extendedCafeShopList.style';

const ExtendedCafeShopList = ({
  myCreatedList,
}: {
  myCreatedList: CafeShopType[];
}) => {
  return (
    <>
      {myCreatedList?.length > 0 ? (
        <Style.ListContainer>
          {myCreatedList.map((shop) => (
            <ExtendedCafeShop shop={shop} key={shop.id} />
          ))}
        </Style.ListContainer>
      ) : (
        <NotResult message="결과가 존재하지 않습니다" />
      )}
    </>
  );
};

export default ExtendedCafeShopList;
