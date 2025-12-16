import { InputBase, styled } from "@mui/material";

export const InputStyled = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.border.main}`,
  fontSize: theme.typography.body1.fontSize,

  "& input::placeholder": {
    color: theme.palette.text.primary,
    opacity: 1,
  },
}));
