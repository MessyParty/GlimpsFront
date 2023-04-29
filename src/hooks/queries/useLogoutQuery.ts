import { logout } from "@/apis/auth";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { loginState } from "@/recoil/auth";
import { getCookie, removeCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

const useLogoutQuery = () => {
  const router = useRouter();
  const [isLogined, setLoginState] = useRecoilState(loginState);
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

  const logoutHandler = () => {
    setLoginState(false);
  };

  useQuery(CACHE_KEYS.logout, () => logout(), {
    enabled: !isLogined && accessToken !== undefined,
    onSuccess: () => {
      removeCookie(ACCESS_TOKEN_COOKIE);
      removeCookie(REFRESH_TOKEN_COOKIE);
      router.replace("/");
    },
    onError: () => {
      setLoginState(true);
      alert("로그아웃에 실패했습니다.");
      router.push("/");
    },
  });

  return { isLogined, logoutHandler };
};

export default useLogoutQuery;
