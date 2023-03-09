export type LoginResponse = {
  accessToken: string;
  accessTokenExpireTime: number;
  grantType: string;
  refreshToken: string;
  refreshTokenExpireTime: number;
};

export type RefreshResponse = {
  accessToken: string;
  accessTokenExpireTime: number;
  grantType: string;
};
