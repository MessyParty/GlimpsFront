import axios, { AxiosError, AxiosResponse } from "axios";
import "dotenv/config";
import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import useRefreshToken from "@/hooks/queries/useRefreshToken";

const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

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
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
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
