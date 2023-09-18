import { useLocation, useNavigate } from 'react-router-dom';
import Style from './submitReview.style';
import { FieldValues, useForm, Controller } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../../recoil/authAtoms';
import { postReview } from '../../../../utils/shared/api/reviewApis';
import { UserInfoType } from '../../../../types/user';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../../createPage/cafeShopCreatePage.style';

const SubmitReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { shopId, shopName }: { shopId: number; shopName: string } =
    location.state;
  const { username, userId } = useRecoilValue<UserInfoType>(userInfoAtom);

  const { register, control, watch, setValue, handleSubmit } = useForm();

  const onValid = async (data: FieldValues) => {
    console.log(data);
    if (!data.content) {
      alert('후기 내용을 입력해주세요.');
      return;
    }
    const postInfo = {
      content: data.content,
      rate: Number(data.rate),
      shopId,
      userId,
    };
    const postResponse = await postReview(postInfo);
    if (postResponse === 201) {
      alert('등록되었습니다.');
      navigate(`/cafeShopDetail/${shopId}`);
    }
  };

  return (
    <Style.FormContainer onSubmit={handleSubmit(onValid)}>
      <Style.FormInnerBox>
        <Style.TitleBox>
          <span>
            <Style.ShopNameText>{shopName}</Style.ShopNameText>에 대한 솔직한
            후기를 작성해주세요.
          </span>
        </Style.TitleBox>

        <label htmlFor="rate">평점</label>
        <Style.RateBox>
          <Controller
            name="rate"
            control={control}
            defaultValue={4.5} // 초기값 설정
            render={({ field }) => (
              <select {...field}>
                <option value={1}>1</option>
                <option value={1.5}>1.5</option>
                <option value={2}>2</option>
                <option value={2.5}>2.5</option>
                <option value={3}>3</option>
                <option value={3.5}>3.5</option>
                <option value={4}>4</option>
                <option value={4.5}>4.5</option>
                <option value={5}>5</option>
              </select>
            )}
          />
        </Style.RateBox>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          placeholder={`${username}님, 주문하신 메뉴는 어떠셨나요? 분위기와 서비스도 궁금해요!`}
          {...register('content')}
        />
        <SubmitButtonContainer>
          <SubmitButton type="submit">후기 등록</SubmitButton>
        </SubmitButtonContainer>
      </Style.FormInnerBox>
    </Style.FormContainer>
  );
};

export default SubmitReview;
