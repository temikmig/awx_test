import { Box, styled, type BoxProps } from "@mui/material";

export const SectionStyled = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));
