/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites: async () => {
    return [
      {
        // login으로 시작하는 url을 만나면 dest로 프록싱 해주는 설정 입니다
        source: "/login/:paths*",
        destination: "https://dev.glims.store/login/:paths*",
      },
      {
        source: "/:path*",
        destination: "https://dev.glims.store/api/v1/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
