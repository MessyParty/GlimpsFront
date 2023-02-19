const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // absolute path 웹팩 설정
  webpackFinal: async (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@root"] = path.resolve(__dirname, "../");

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return { ...config };
  },
};
