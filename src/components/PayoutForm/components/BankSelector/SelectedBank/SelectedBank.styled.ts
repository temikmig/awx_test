import { theme } from "@/theme";
import { Box, styled } from "@mui/material";

export const CurrencyIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: "#6685bc",
  marginRight: theme.spacing(1),
  color: theme.palette.common.white,
}));

export const SelectedBankContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
});
