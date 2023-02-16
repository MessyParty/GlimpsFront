import axios from "axios";
import "dotenv/config";
import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";

const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

const api = axios.create({
  baseURL: process.env.BASE_URL,
  validateStatus: (status) => status >= 200 && status < 400,
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
});

// TODO: 401, 403 시 refreshToken 으로 accessToken 갱신 or refreshToken 없을 경우 처리
api.interceptors.response.use();

export default api;
