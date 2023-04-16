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
        source: "/api/v1/:path*",
        destination: "https://dev.glims.store/api/v1/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
