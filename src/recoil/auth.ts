import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import { getCookie } from "@/utils/cookie";
import { atom, selector } from "recoil";

const defaultSelector = selector({
  key: "loginStateDefault",
  get: () => {
    return getCookie(ACCESS_TOKEN_COOKIE) ? true : false;
  },
});

export const loginState = atom<boolean>({
  key: "loginState",
  default: defaultSelector,
});
