import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_BASEURL;

// get 요청 - 인증값이 필요없는 경우
const axiosApi = (url: string, options?: any) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url: string, options?: any) => {
  const token = '토큰 값';
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL!);
export const authInstance = axiosAuthApi(BASE_URL!);
