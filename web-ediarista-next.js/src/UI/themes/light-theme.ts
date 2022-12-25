import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9661ff",
      main: "#6b2aee",
      dark: "#581ecd",
    },
    secondary: {
      light: "#2bfff2",
      main: "#02e7d9",
      dark: "#1dd6cb",
    },
    text: {
      primary: "#707070",
      secondary: "#9b9b9b",
    },
    error: {
      main: "#fc3c00",
    },
    warning: {
      main: "#fca600",
    },
    success: {
      main: "#00d34d",
    },
    grey: {
      50: "#fafafa",
      100: "#f0f0f0",
      200: "#d7d9dd",
      300: "#c4c4c4",
      400: "#9b9b9b",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 3,
  },
});

export default theme;
