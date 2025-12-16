import { Button, styled } from "@mui/material";

interface ButtonStyledProps {
  active?: boolean;
}

export const ButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<ButtonStyledProps>(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  fontSize: theme.typography.body1.fontSize,
  width: "auto",
  minWidth: "auto",
  backgroundColor: active
    ? theme.palette.tab.activeBg
    : theme.palette.tab.inactiveBg,
  color: active ? theme.palette.tab.activeText : theme.palette.tab.inactiveText,
  "&:hover": {
    backgroundColor: active
      ? theme.palette.tab.activeBg
      : theme.palette.tab.hoverBg,
    color: active
      ? theme.palette.tab.activeText
      : theme.palette.tab.inactiveText,
  },
}));
