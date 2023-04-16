import { useQuery } from "@tanstack/react-query";
import { getAllReview } from "@/apis/review";

type UseReviewsProps = {
  offset?: number;
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};

const useReviews = ({
  offset = 0,
  limit = 10,
  orderStandard = "DATE",
  sortType = "DESC",
}: UseReviewsProps) => {
  return useQuery(
    ["review", "all", offset, limit, orderStandard, sortType],
    () => getAllReview({ offset, limit, orderStandard, sortType })
  );
};

export default useReviews;
