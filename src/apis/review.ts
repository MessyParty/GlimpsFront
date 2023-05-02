import axios from "axios";
import api from ".";
import type { AxiosResponse } from "axios";
import type {
  Review,
  ReviewPostType,
  ReviewParameterType,
  ReviewListType,
} from "./Interface/review.interface";
import { Perfume } from "./Interface/perfume.interface";

export const getBestReview = async (num: number): Promise<Review[]> => {
  const { data } = await axios.get<Review[]>("/reviews/bestReviews", {
    params: {
      amountOfBestReview: num,
    },
  });
  return data;
};

export const getReview = async (rid: string): Promise<Review> => {
  const { data } = await axios.get<Review>(`/reviews/${rid}`);
  return data;
};

export const getRecentReview = async (): Promise<Review> => {
  const { data } = await axios.get<Review>(`/reviews/recentReviews`);
  return data;
};

export const getReviewOfPerfume = async (pid: string): Promise<Review[]> => {
  const { data } = await axios.get<Review[]>(`/reviews/perfumeReviews`, {
    params: {
      perfumeUuid: pid,
    },
  });
  return data;
};

export const createReview = async <T = Review, R = ReviewPostType>(
  payload: R
): Promise<T> => {
  const { data } = await api.post<T, AxiosResponse<T>, R>(`/reviews`, {
    ...payload,
  });
  return data;
};

export const updateReview = async <T = Review, R = ReviewPostType>(
  rid: string,
  payload: R
): Promise<T> => {
  const { data } = await api.patch<T, AxiosResponse<T>, R>(`/reviews/${rid}`, {
    ...payload,
  });
  return data;
};

export const deleteReview = async (rid: string): Promise<void> => {
  await api.delete(`/reviews/${rid}`);
};

export const createReviewLike = async (rid: string): Promise<Review> => {
  const { data } = await api.post<Review>(`/reviews/${rid}/heart`);
  return data;
};

export const cancelReviewLike = async (rid: string): Promise<Review> => {
  const { data } = await api.delete<Review>(`/reviews/${rid}/heart`);
  return data;
};

export const getAllReview = async (
  params: ReviewParameterType
): Promise<ReviewListType[]> => {
  const { data } = await api.get<ReviewListType[]>(`/reviews`, {
    params,
  });
  return data;
};

export const getBestReviewByPerfume = async (
  pid: string
): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/reviews/${pid}/bestReviews`);
  return data;
};
