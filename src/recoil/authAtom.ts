import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { getCookie } from "@/utils/cookie";
import { atom, selector } from "recoil";

export type AuthState = "LOGINED" | "REFRESH_NEEDED" | "NOT_LOGINED";
export type AuthAction = "LOGIN" | "REFRESH" | "LOGOUT" | undefined;

const accessToken = getCookie(ACCESS_TOKEN_COOKIE);
const refreshToken = getCookie(REFRESH_TOKEN_COOKIE);

const authStateSelector = selector({
  key: "authStateSelector",
  get: (): AuthState => {
    if (accessToken !== undefined) {
      return "LOGINED";
    }
    if (refreshToken !== undefined) {
      return "REFRESH_NEEDED";
    }
    return "NOT_LOGINED";
  },
});

export const authStateAtom = atom<AuthState>({
  key: "authStateAtom",
  default: authStateSelector,
});

export const authActionAtom = atom<AuthAction>({
  key: "authActionAtom",
  default: undefined,
});
