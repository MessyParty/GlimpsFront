import api from ".";
import {
  LoginResponse,
  ProfileResponse,
  RefreshResponse,
} from "./Interface/auth.interface";

// TODO: API 스펙 확인, withCredentials 옵션 테스트
export const login = async (code: string): Promise<LoginResponse> => {
  await api.get("/api/v1/session", {
    params: { id: "kakao" },
  });
  const result = await api.get("/login/oauth2/code/kakao", {
    params: { code },
  });
  return result.data;
};

export const refresh = async (): Promise<RefreshResponse> => {
  const result = await api.post("/api/v1/session/access-token/issue");
  return result.data;
};

export const logout = async () => {
  await api.post("/api/v1/session/logout");
};

export const profile = async (): Promise<ProfileResponse> => {
  const result = await api.get("/api/v1/users");
  return result.data;
};
