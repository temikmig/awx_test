import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import type { TitleAlign } from "./types";
import {
  AmountSelectorWrapper,
  AmountContainer,
  AmountWrapper,
  AmountIconButton,
  AmountLabel,
  AmountTitle,
  AmountValueInput,
} from "./AmountSelector.styled";

interface AmountSelectorProps {
  title: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  titleAlign?: TitleAlign;
}

export const AmountSelector = ({
  title,
  label,
  min = 0,
  max = 100000,
  step = 100,
  defaultValue = 0,
  titleAlign = "left",
}: AmountSelectorProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(max, Math.max(min, Number(e.target.value)));
    setValue(newValue);
  };

  const handleIncrement = () => {
    setValue((prev) => Math.min(prev + step, max));
  };

  const handleDecrement = () => {
    setValue((prev) => Math.max(prev - step, min));
  };

  return (
    <AmountSelectorWrapper>
      <AmountTitle titleAlign={titleAlign}>{title}</AmountTitle>
      <AmountContainer>
        <AmountLabel>{label}</AmountLabel>
        <AmountWrapper>
          <AmountIconButton
            size="small"
            onClick={handleDecrement}
            disabled={value <= min}
          >
            <RemoveIcon />
          </AmountIconButton>
          <AmountValueInput
            type="number"
            value={value}
            onChange={handleChange}
          />
          <AmountIconButton
            size="small"
            onClick={handleIncrement}
            disabled={value >= max}
          >
            <AddIcon />
          </AmountIconButton>
        </AmountWrapper>
      </AmountContainer>
    </AmountSelectorWrapper>
  );
};
