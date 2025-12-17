import { Box, IconButton, styled, Typography } from "@mui/material";
import type { TitleAlign } from "./types";

export const AmountSelectorWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: theme.spacing(1),
}));

export const AmountContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.border.main}`,
  fontSize: theme.typography.body1.fontSize,

  "&:focus-within": {
    borderColor: theme.palette.primary.main,
  },
}));

export const AmountWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AmountTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "titleAlign",
})<{ titleAlign: TitleAlign }>(({ theme, titleAlign }) => ({
  textAlign: titleAlign,
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
}));

export const AmountLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
}));

export const AmountValueInput = styled("input")(({ theme }) => ({
  width: 48,
  textAlign: "center",
  fontSize: theme.typography.body1.fontSize,
  border: "none",
  outline: "none",
  background: "transparent",

  MozAppearance: "textfield",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
}));

export const AmountIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:active": {
    backgroundColor: theme.palette.action.active,
  },

  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
  },
}));
