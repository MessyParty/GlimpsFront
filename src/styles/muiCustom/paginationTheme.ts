import type { Components, Theme } from "@mui/material";

export const pageCustomComponents: Components<Omit<Theme, "components">> = {
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          fontWeight: "bolder",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "& > .MuiTouchRipple-root": {
            diplay: "none",
          },
        },
      },
    },
  },
};
