import { Box, FormControlLabel, RadioGroup, styled } from "@mui/material";

export const RequisitesCardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.border.main}`,

  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
  },

  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.primary,
    opacity: 1,
  },

  "&:focus-within": {
    borderColor: theme.palette.primary.main,
  },
}));

export const RequisitesRadioGroup = styled(RadioGroup)(({ theme }) => ({
  margin: 0,
  gap: theme.spacing(2),
}));

export const RequisitesFormControlLabel = styled(FormControlLabel)(
  ({ theme }) => ({
    margin: 0,
    gap: theme.spacing(1),

    "& .MuiFormControlLabel-label": {
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.primary,
    },
  })
);
