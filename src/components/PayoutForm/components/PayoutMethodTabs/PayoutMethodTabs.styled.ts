import { Box, styled } from "@mui/material";

export const PayoutMethodTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  gap: theme.spacing(2),
}));
