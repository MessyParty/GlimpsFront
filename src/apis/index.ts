import axios, { AxiosError, AxiosResponse } from "axios";
import "dotenv/config";
import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import useRefreshToken from "@/hooks/queries/useRefreshToken";

const isAuthError = (error: AxiosResponse): boolean => {
  if (!(error instanceof AxiosError)) {
    return false;
  }
  if (error.response?.status === 401 || error.response?.status === 403) {
    return true;
  }
  return false;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  validateStatus: (status) => status >= 200 && status < 400,
});
/*
모든 api call에 불필요하게 들어가는 것과 로그인 요청에도 포함되는 것을 방지 하기 위해 삭제 했습니다
api.interceptors.request.use((config) => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
*/

api.interceptors.request.use((config) => {
  // access token이 undefined가 아닐 경우에만 포함 되도록 하는 방어로직입니다.
  // 즉 추후 request header에서 token값이 포함이 안되어 있다면 undefined 이기 때문입니다
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  // console.log(config);
  /*
  if (config.url?.startsWith("/login")) {
    rewrites 설정 변경으로 대체 하였습니다
    config.baseURL = process.env.NEXT_PUBLIC_OAUTH_URL;
  }
*/
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    // if (isAuthError(error)) {
    //   useRefreshToken();
    // }
    return Promise.reject(error);
  }
);

export default api;
