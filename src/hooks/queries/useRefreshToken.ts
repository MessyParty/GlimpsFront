import { refresh } from "@/apis/auth";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { authActionAtom } from "@/recoil/authAtom";
import { getCookie, setCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import useLogoutQuery from "./useLogoutQuery";

const useRefreshToken = () => {
  const router = useRouter();
  const { logoutHandler } = useLogoutQuery();
  const refreshToken = getCookie(REFRESH_TOKEN_COOKIE);
  const [authAction, setAuthAction] = useRecoilState(authActionAtom);

  const logout = () => {
    logoutHandler();
  };

  if (refreshToken === undefined) {
    return logout();
  }

  useQuery(CACHE_KEYS.refresh, () => refresh(), {
    enabled: authAction === "REFRESH",
    onSuccess: (response) => {
      setCookie(ACCESS_TOKEN_COOKIE, response.accessToken, {
        path: "/",
        expires: new Date(response.accessTokenExpireTime),
      });
      setAuthAction("LOGIN");
      router.replace("/");
    },
    onError: () => {
      alert("로그인 상태가 유효하지 않습니다.");
      logout();
      router.push("/");
    },
  });

  return setAuthAction("REFRESH");
};

export default useRefreshToken;
