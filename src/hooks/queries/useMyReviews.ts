import { getMyReview } from "@/apis/review";
import { CACHE_KEYS } from "@/constants/cacheKeys";
import { useQuery } from "@tanstack/react-query";

type UseReviewsProps = {
  offset?: number;
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};

const useMyReviews = ({
  offset = 0,
  limit = 3,
  orderStandard = "DATE",
  sortType = "DESC",
}: UseReviewsProps) => {
  return useQuery(
    [...CACHE_KEYS.myReviews, offset, limit, orderStandard, sortType],
    () => getMyReview({ offset, limit, orderStandard, sortType })
  );
};

export default useMyReviews;
