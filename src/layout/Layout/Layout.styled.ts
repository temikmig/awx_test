import { Box, styled } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

export const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 600,
  minWidth: 320,
  backgroundColor: theme.palette.background.paper,
}));
