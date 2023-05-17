export type Review = {
  perfumeBrandEng: string;
  body: string;
  createdAt: string;
  heartCnt: number;
  longevityRatings: number;
  nickname: string;
  overallRatings: number;
  perfumeBrand: string;
  perfumeName: string;
  photoUrls: string[];
  sillageRatings: number;
  scentRatings: number;
  title: string;
  tags?: string[];
  uuid: string;
  scentRatings: number;
};

export type ReviewFormType = Pick<
  Review,
  | "body"
  | "longevityRatings"
  | "overallRatings"
  | "scentRatings"
  | "sillageRatings"
  | "title"
>;

export type ReviewPostType = ReviewFormType & { perfumeUuid: string };

export type ReviewParameterType = {
  limit: number;
  offset: number;
  orderStandard: string;
  sortType: string;
};

type ListType = {
  hasNext: boolean;
  totalElements: number;
  totalPages: number;
  uuid: string;
  photoUrl: string[];
  overallRating: number;
};
export type ReviewListType = Omit<Review, "createdAt"> & ListType;
