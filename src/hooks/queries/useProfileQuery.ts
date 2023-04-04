import { profile } from "@/apis/auth";
import { ProfileResponse } from "@/apis/Interface/auth.interface";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { getCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";

const useProfileQuery = () => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

  return useQuery<ProfileResponse>(CACHE_KEYS.profile, () => profile(), {
    enabled: !!accessToken,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export default useProfileQuery;
