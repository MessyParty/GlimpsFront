type Note = {
  engName: string;
  id: number;
  korName: string;
};

type Photo = {
  order?: number;
  url: string;
};

type Perfume = {
  brandId: string;
  brandName: string;
  brandNameKor: string;
  longevityRatings: number;
  notes: Note[];
  overallRatings: number;
  perfumeName: string;
  reviewCnt: number;
  sillageRatings: number;
  uuid: string;
  photos: Photo[];
};
