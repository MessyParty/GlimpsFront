import api from ".";
import { LoginResponse } from "./Interface/auth.interface";

export const login = async (code: string): LoginResponse => {
  const result = await api.post("/api/v1/session/oauth/login", { code });
  return result.data;
};

export const logout = async () => {
  await api.post("/api/v1/session/logout");
};
