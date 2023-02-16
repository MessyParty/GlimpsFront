import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { login } from "@/apis/auth";
import { authState } from "@/recoil/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";

const useLoginQuery = (code: string) => {
  const setAuthState = useSetRecoilState(authState);
  const result = useQuery(CACHE_KEYS.login, () => login(code), {
    onSuccess: (response) => {
      // TODO: setCookie (access, refresh), setAuthState, redirect
    },
    onError: () => {
      // TODO: 처리 방법 논의
    },
  });
};

export default useLoginQuery;
