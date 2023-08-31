import { useLocation } from 'react-router-dom';
import Style from './submitReview.style';
import { FieldValues, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../../recoil/authAtoms';
import { postReview } from '../../../../utils/shared/api/reviewApis';
import { UserInfoType } from '../../../../types/user';

const SubmitReview = () => {
  const location = useLocation();
  const { shopId, shopName }: { shopId: number; shopName: string } =
    location.state;
  const { username, userId } = useRecoilValue<UserInfoType>(userInfoAtom);

  const { register, watch, setValue, handleSubmit } = useForm();

  const onValid = (data: FieldValues) => {
    const postInfo = {
      content: data.content,
      rate: Number(data.rate),
      shopId,
      userId,
    };
    postReview(postInfo);
  };

  return (
    <Style.FormContainer onSubmit={handleSubmit(onValid)}>
      <Style.FormInnerBox>
        <div>
          <span>{shopName}에 대한 솔직한 후기를 작성해주세요.</span>
        </div>

        <label htmlFor="rate">평점</label>
        <input id="rate" type="text" placeholder="4.5" {...register('rate')} />

        <label htmlFor="content">내용</label>
        <input
          id="content"
          type="text"
          placeholder={`${username}님, 주문하신 메뉴는 어떠셨나요? 분위기와 서비스도 궁금해요!`}
          {...register('content')}
        />
        <button type="submit">후기 등록</button>
      </Style.FormInnerBox>
    </Style.FormContainer>
  );
};

export default SubmitReview;
