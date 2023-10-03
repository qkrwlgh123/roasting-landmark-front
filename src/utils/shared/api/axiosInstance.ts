import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_BASEURL;

const getToken = () => localStorage.getItem('token');

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

// 인증값이 필요없는 경우
const axiosApi = (url: string, options?: any) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// 인증값이 필요한 경우
const axiosAuthApi = (url: string, options?: any) => {
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: getAuthorizationHeader() },
    ...options,
  });
  return instance;
};

// 인증값이 필요한 경우 - form_data 데이터 전송
const axiosFormDataApi = (url: string, options?: any) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: getAuthorizationHeader(),
      'Content-Type': 'multipart/form-data',
    },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL!);
export const authInstance = axiosAuthApi(BASE_URL!);
export const formDataInstance = axiosFormDataApi(BASE_URL!);
