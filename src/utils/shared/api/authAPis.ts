import { FieldValues } from 'react-hook-form';

import {
  authInstance,
  defaultInstance,
  formDataInstance,
} from './axiosInstance';

// 신규 유저 등록
export const postAddUser = async (data: FormData) => {
  try {
    const shop = await formDataInstance.post('user/sign-up', data);
    console.log(shop);
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const postLoginInfo = async (
  data: FieldValues,
  handleReflectLoginState: (
    userId: number,
    username: string,
    profileImage: string,
    profileDescription: string
  ) => void
) => {
  try {
    const resultData = await defaultInstance.post('user/login', data);
    const { token } = resultData.data;
    const { userInfo } = resultData.data;
    localStorage.setItem('token', token);
    handleReflectLoginState(
      userInfo.id,
      userInfo.username,
      userInfo.profileImage,
      userInfo.profileDescription
    );
    window.location.href = '/';
  } catch (err) {
    console.log(err);
  }
};

// 로그아웃
export const logout = () => {
  // 토큰 제거
  localStorage.removeItem('token');
  window.location.href = '/';
};

// 토큰 유효성 검사
export const handleValidateToken = async () => {
  try {
    await authInstance.get('user/validate');
    return true;
  } catch (err) {
    return false;
  }
};
