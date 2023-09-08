import {
  authInstance,
  defaultInstance,
  formDataInstance,
} from '../axiosInstance';

// 카카오 로그인 - 인가 코드 응답 및 서버 전송
export const receivePermissionCode = async () => {
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  window.location.href = url;
};
