import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "space-between",
  flexWrap: "wrap",
}));
