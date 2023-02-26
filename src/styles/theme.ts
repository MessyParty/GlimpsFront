import { createTheme } from "@mui/material";

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
  },
  typography: {
    fontFamily: ["Libre Baskerville", "Pretendard-Regular", "sans-serif"].join(
      ","
    ),
  },
});

export default theme;
