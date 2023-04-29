export type LoginResponse = {
  accessToken: string;
  accessTokenExpireTime: string;
  grantType: string;
  refreshToken: string;
  refreshTokenExpireTime: string;
};

export type RefreshResponse = {
  accessToken: string;
  accessTokenExpireTime: string;
  grantType: string;
};

export type ProfileResponse = {
  createdAt: string;
  email: string;
  nickname: string;
  reviewCnt: number;
  role: string;
  userType: string;
};
