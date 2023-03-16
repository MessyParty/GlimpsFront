import axios from "axios";
import type { Review } from "./Interface/review.interface";

export const getBestReview = async (num: number): Promise<Review[]> => {
  const { data } = await axios.get<Review[]>("/review/bestReviews", {
    params: {
      amountOfBestReview: num,
    },
  });
  return data;
};

export const getReview = async (rid: number): Promise<Review> => {
  const { data } = await axios.get<Review>(`/review/${rid}`);
  return data;
};

export const getRecentReview = async (): Promise<Review> => {
  const { data } = await axios.get<Review>(`/reviews/recentReviews`);
  return data;
};
