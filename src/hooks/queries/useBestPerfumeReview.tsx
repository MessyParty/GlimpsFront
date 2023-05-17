import { getBestReviewByPerfume } from "@/apis/review";
import { useQuery } from "@tanstack/react-query";

const useBestPerfumeReview = (id: string) => {
  return useQuery(["bestPerfumeReview", id], () => getBestReviewByPerfume(id));
};

export default useBestPerfumeReview;
