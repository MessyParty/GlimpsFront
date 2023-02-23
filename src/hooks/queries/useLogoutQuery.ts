import { logout } from "@/apis/auth";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { loginState } from "@/recoil/auth";
import { removeCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

const useLogoutQuery = () => {
  const router = useRouter();
  const setLoginState = useSetRecoilState(loginState);

  useQuery(CACHE_KEYS.logout, () => logout(), {
    onSuccess: () => {
      removeCookie(ACCESS_TOKEN_COOKIE);
      removeCookie(REFRESH_TOKEN_COOKIE);
      setLoginState(false);
      router.replace("/");
    },
    onError: () => {
      alert("로그아웃에 실패했습니다.");
      router.push("/");
    },
  });

  return null;
};

export default useLogoutQuery;
