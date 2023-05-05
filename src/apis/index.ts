import axios, { AxiosError, AxiosResponse } from "axios";
import "dotenv/config";
import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import useRefreshToken from "@/hooks/queries/useRefreshToken";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  validateStatus: (status) => status >= 200 && status < 400,
});

api.interceptors.request.use((config) => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.request.use((config) => {
  if (config.url?.startsWith("/login")) {
    config.baseURL = process.env.NEXT_PUBLIC_OAUTH_URL;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (isAuthError(error)) {
      useRefreshToken();
    }
    return Promise.reject(error);
  }
);

export default api;

const isAuthError = (error: AxiosResponse): boolean => {
  if (!(error instanceof AxiosError)) {
    return false;
  }
  if (error.response?.status === 401 || error.response?.status === 403) {
    return true;
  }
  return false;
};
