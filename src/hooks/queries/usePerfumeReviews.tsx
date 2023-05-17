import { getReviewOfPerfume } from "@/apis/review";
import { useQuery } from "@tanstack/react-query";

const usePerfumeReviews = (id: string) => {
  return useQuery(["perfumeReview", id], () => getReviewOfPerfume(id));
};

export default usePerfumeReviews;
