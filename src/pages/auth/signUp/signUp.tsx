import { FieldValues, useForm } from 'react-hook-form';
import Style from './signUp.style';
import { postAddUser } from '../../../utils/shared/api/authAPis';

const SignUp = () => {
  const { register, watch, setValue, handleSubmit } = useForm();

  const onValid = (data: FieldValues) => {
    const postInfo = {
      ...data,
      profileImage: undefined,
    };

    const formData = new FormData();
    formData.append('image', data.profileImage[0]); //files[0] === upload file
    formData.append('data', JSON.stringify(postInfo));

    postAddUser(formData);
  };

  return (
    <Style.FormContainer onSubmit={handleSubmit(onValid)}>
      <Style.FormInnerBox>
        <label htmlFor="username">사용자 이름</label>
        <input id="username" type="text" {...register('username')} />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="*******"
          {...register('password')}
        />

        <label htmlFor="profileDescription">소개</label>
        <input
          id="profileDescription"
          type="text"
          placeholder="반갑습니다 !"
          {...register('profileDescription')}
        />

        <label htmlFor="profileImage">프로필 사진 등록</label>
        <input id="profileImage" type="file" {...register('profileImage')} />

        <button type="submit">회원가입</button>
      </Style.FormInnerBox>
    </Style.FormContainer>
  );
};

export default SignUp;
