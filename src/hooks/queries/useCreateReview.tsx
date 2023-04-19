import { useMutation } from "@tanstack/react-query";
import { createReview } from "@/apis/review";
import type { ReviewPostType } from "@/apis/Interface/review.interface";

const useCreateReview = () => {
  return useMutation(({ ...payloads }: ReviewPostType) =>
    createReview({ ...payloads })
  );
};

export default useCreateReview;
