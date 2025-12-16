import { Select, styled } from "@mui/material";

export const BankSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
