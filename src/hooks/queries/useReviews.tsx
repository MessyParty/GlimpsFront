import { useQuery } from "@tanstack/react-query";

type UseReviewsProps = {
  offset?: number;
  limit?: number;
  order?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};

const useReviews = ({
  offset = 0,
  limit = 10,
  order = "DATE",
  sortType = "DESC",
}: UseReviewsProps) => {
  return useQuery(["review", "all", offset, limit, order, sortType]);
};

export default useReviews;
