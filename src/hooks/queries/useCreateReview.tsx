import { createReview } from "@/apis/review";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ReviewPostType, Review } from "@/apis/Interface/review.interface";

const useCreateReview = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ ...payloads }: ReviewPostType) => createReview({ ...payloads }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["review"]);
      },
    }
  );
};

export default useCreateReview;
