import { Box, styled } from "@mui/material";
import { theme } from "@/theme";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "space-between",
}));

export const PercentBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFilled" && prop !== "label",
})<{ isFilled: boolean; label?: string }>(({ isFilled, label }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,

  "&::before": {
    content: '""',
    display: "block",
    width: "100%",
    height: 12,
    borderRadius: 6,
    backgroundColor: isFilled
      ? theme.palette.common.black
      : theme.palette.common.white,
  },

  "&::after": {
    content: label ? `"${label}"` : '""',
    height: 18,
    fontSize: 12,
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
  },
}));
