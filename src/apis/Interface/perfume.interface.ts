export type PerfumeData = {
  brandId: number;
  brandName: string;
  longevityRatings: number;
  overallRatings: number;
  perfumeName: string;
  reviewCnt: number;
  sillageRatings: number;
  uuid: string;
};

export type Perfume = {
  content?: PerfumeData[];
};
