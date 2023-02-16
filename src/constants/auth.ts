import "dotenv/config";

export const KAKAO_REDIRECT_URI = "/session/oauth/callback/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const ACCESS_TOKEN_COOKIE = "accessToken";
