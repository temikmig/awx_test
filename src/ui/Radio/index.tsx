import { UncheckedRadioIcon, CheckedRadioIcon } from "@/assets/icons";
import { Radio, styled, type RadioProps } from "@mui/material";

export const RadioStyled = styled((props: RadioProps) => (
  <Radio
    {...props}
    icon={<UncheckedRadioIcon />}
    checkedIcon={<CheckedRadioIcon />}
  />
))({
  padding: 0,
});
