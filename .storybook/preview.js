import { ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import theme from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
