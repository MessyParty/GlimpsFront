export type LoginResponse = Promise<{
  accessToken: string;
  accessTokenExpireTime: number;
  grantType: string;
  refreshToken: string;
  refreshTokenExpireTime: number;
}>;

export type RefreshResponse = Promise<{
  accessToken: string;
  accessTokenExpireTime: number;
  grantType: string;
}>;
