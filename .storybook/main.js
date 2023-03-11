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

    // 기존 svg 파일 로더 비활성화
    config.module.rules
      .filter((rule) => rule.test.test(".svg"))
      .forEach((rule) => (rule.exclude = /\.svg$/i));

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // console.log(config.module.rules);

    return { ...config };
  },
  staticDirs: ["../public"],
};
