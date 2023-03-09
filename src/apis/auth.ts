import api from ".";
import { LoginResponse, RefreshResponse } from "./Interface/auth.interface";

export const login = async (code: string): Promise<LoginResponse> => {
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
