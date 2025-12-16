import { CheckedIcon, UncheckedIcon } from "@/assets/icons";
import { Checkbox, styled, type CheckboxProps } from "@mui/material";

export const CheckboxStyled = styled((props: CheckboxProps) => (
  <Checkbox {...props} icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
))({
  padding: 0,
});
