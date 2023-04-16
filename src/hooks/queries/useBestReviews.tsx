import { useQuery } from "@tanstack/react-query";
import { getBestReview } from "@/apis/review";

const useBestReviews = (num: number) => {
  return useQuery(["review", "best"], () => getBestReview(num));
};

export default useBestReviews;
