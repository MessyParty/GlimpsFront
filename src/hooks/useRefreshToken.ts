import { refresh } from "@/apis/auth";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { setCookie, getCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import useLogoutQuery from "./queries/useLogoutQuery";

const useRefreshToken = () => {
  const router = useRouter();
  const token = getCookie(REFRESH_TOKEN_COOKIE);

  const logout = () => {
    useLogoutQuery();
    alert("로그아웃 되었습니다.");
    router.replace("/");
  };

  if (token == undefined) {
    logout();
  }

  useQuery(CACHE_KEYS.refresh, () => refresh(), {
    onSuccess: (response) => {
      setCookie(ACCESS_TOKEN_COOKIE, response.accessToken, {
        path: "/",
        maxAge: response.accessTokenExpireTime * 1000,
      });
      router.replace("/");
    },
    onError: () => {
      logout();
    },
  });

  return null;
};

export default useRefreshToken;
