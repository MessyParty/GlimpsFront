import { createReviewPhoto } from "@/apis/review";
import { useMutation } from "@tanstack/react-query";

type PayloadType = {
  id: string;
  photo: FormData;
};

const useCreateReviewPhoto = () => {
  return useMutation(({ id, photo }: PayloadType) =>
    createReviewPhoto(id, photo)
  );
};

export default useCreateReviewPhoto;
