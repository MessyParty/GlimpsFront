import { useRecoilState, useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { login } from "@/apis/auth";
import { authStateAtom, authActionAtom } from "@/recoil/authAtom";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { useRouter } from "next/router";
import { setCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";

const useLoginQuery = (code: string) => {
  const router = useRouter();
  const setAuthState = useSetRecoilState(authStateAtom);
  const [authAction, setAuthAction] = useRecoilState(authActionAtom);
  
  useQuery(CACHE_KEYS.login, () => login(code), {
    enabled: !!code && authAction === "LOGIN",
    onSuccess: (response) => {
      setCookie(ACCESS_TOKEN_COOKIE, response.accessToken, {
        path: "/",
        expires: new Date(response.accessTokenExpireTime),
      });
      setCookie(REFRESH_TOKEN_COOKIE, response.refreshToken, {
        path: "/",
        expires: new Date(response.refreshTokenExpireTime),
      });
      setAuthState("LOGINED");
      router.replace("/");
    },
    onError: () => {
      alert("로그인에 실패했습니다.");
      setAuthAction("LOGOUT");
      router.replace("/");
    },
  });

  return setAuthAction("LOGIN");
};

export default useLoginQuery;
