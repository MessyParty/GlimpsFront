export type Review = {
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
  title: string;
  tags?: string[];
};

export type ReviewFormType = Pick<
  Review,
  | "body"
  | "longevityRatings"
  | "overallRatings"
  | "photoUrls"
  | "sillageRatings"
  | "title"
  | "tags"
>;

export type ReviewPostType = ReviewFormType & { perfumeUuid: string };

export type ReviewParameterType = {
  limit: number;
  offset: number;
  orderStandard: string;
  sortType: string;
};
