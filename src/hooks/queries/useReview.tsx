import { useQuery } from "@tanstack/react-query";
import { getReview } from "@/apis/review";

const useReview = (rid: string) => {
  return useQuery(["review", rid], () => getReview(rid));
};

export default useReview;
