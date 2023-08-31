import { FieldValues, useForm } from 'react-hook-form';
import Style from './login.style';
import { postLoginInfo } from '../../../utils/shared/api/authAPis';
import { useRecoilState } from 'recoil';
import { isLoggedInAtom, userInfoAtom } from '../../../recoil/authAtoms';
import { UserInfoType } from '../../../types/user';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [userInfo, setUserInfo] = useRecoilState<UserInfoType>(userInfoAtom);

  const handleReflectLoginState = (
    userId: number,
    username: string,
    profileImage: string,
    profileDescription: string
  ) => {
    setIsLoggedIn((prev: boolean) => !prev);
    setUserInfo({ userId, username, profileImage, profileDescription });
  };

  const { register, watch, setValue, handleSubmit } = useForm();

  const onValid = (data: FieldValues) => {
    const postInfo = {
      ...data,
    };

    postLoginInfo(postInfo, handleReflectLoginState);
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

        <button type="submit">로그인</button>
      </Style.FormInnerBox>
    </Style.FormContainer>
  );
};

export default Login;
