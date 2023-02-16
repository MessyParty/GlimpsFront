export type LoginResponse = Promise<{
  accessToken: string;
  accessTokenExpireTime: string;
  grantType: string;
  refreshToken: string;
  refreshTokenExpireTime: string;
}>;
