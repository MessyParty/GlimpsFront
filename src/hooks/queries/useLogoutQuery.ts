import { logout } from "@/apis/auth";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { authActionAtom, authStateAtom } from "@/recoil/authAtom";
import { removeCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

const useLogoutQuery = () => {
  const router = useRouter();
  const [authState, setAuthState] = useRecoilState(authStateAtom);
  const [authAction, setAuthAction] = useRecoilState(authActionAtom);

  const logoutHandler = () => {
    setAuthAction("LOGOUT");
  };

  useQuery(CACHE_KEYS.logout, () => logout(), {
    enabled: authAction === "LOGOUT",
    onSuccess: () => {
      removeCookie(ACCESS_TOKEN_COOKIE);
      removeCookie(REFRESH_TOKEN_COOKIE);
      setAuthState("NOT_LOGINED");
      router.replace("/");
    },
    onError: () => {
      alert("로그아웃에 실패했습니다.");
      setAuthAction("LOGIN");
      router.push("/");
    },
  });

  return { authState, logoutHandler };
};

export default useLogoutQuery;
