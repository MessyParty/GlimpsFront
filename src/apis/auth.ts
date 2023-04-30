import api from ".";
import {
  LoginResponse,
  ProfileResponse,
  RefreshResponse,
} from "./Interface/auth.interface";

export const login = async (code: string): Promise<LoginResponse> => {
  const { data: stateData } = await api.get("/api/v1/session/state", {
    params: { provider: "kakao" },
    withCredentials: true,
  });
  const { data: loginData } = await api.get("/login/oauth2/code/kakao", {
    params: { code: code, state: stateData.state },
    withCredentials: true,
  });
  return loginData;
};

export const refresh = async (): Promise<RefreshResponse> => {
  const { data } = await api.post("/api/v1/session/access-token/issue");
  return data;
};

export const logout = async () => {
  return await api.post("/api/v1/logout");
};

export const profile = async (): Promise<ProfileResponse> => {
  const { data } = await api.get("/api/v1/users");
  return data;
};
