import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: { main: string };
    tab: {
      activeBg: string;
      activeText: string;
      inactiveBg: string;
      inactiveText: string;
      hoverBg: string;
    };
  }
  interface PaletteOptions {
    border?: { main: string };
    tab?: {
      activeBg?: string;
      activeText?: string;
      inactiveBg?: string;
      inactiveText?: string;
      hoverBg?: string;
    };
  }
}

export const theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "SF Pro Text",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ].join(","),
    body1: {
      fontSize: 18,
      color: "#000000",
    },
    body2: {
      fontSize: 14,
      color: "#9E9E9E",
    },
  },
  palette: {
    primary: {
      main: "#f7d100",
    },
    background: {
      default: "#ffffff",
      paper: "#f3f3f3",
    },
    text: {
      primary: "#000000",
      secondary: "#9e9e9e",
      disabled: "#e0e0e0",
    },
    action: { hover: "#f1f1f1", active: "#ebebeb" },
    border: { main: "#e0e0e0" },
    tab: {
      activeBg: "#000",
      activeText: "#fff",
      inactiveBg: "#fff",
      inactiveText: "#000",
      hoverBg: "#f0f0f0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          padding: "8px 16px",
        },
      },
    },
  },
});
