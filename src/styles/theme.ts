import { createTheme } from "@mui/material";
import { pageCustomComponents } from "./muiCustom/paginationTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "transparent",
              color: "black",
            }),
        }),
      },
    },
    ...pageCustomComponents,
  },
  typography: {
    fontFamily: ["Libre Baskerville", "Pretendard-Regular", "sans-serif"].join(
      ","
    ),
  },
});

export default theme;
