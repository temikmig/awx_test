import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
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
  value: string;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  titleAlign?: TitleAlign;
  isError?: boolean;
}

export const AmountSelector = ({
  title,
  label,
  value,
  min = 0,
  max = 100_000,
  step = 100,
  onChange,
  titleAlign = "left",
  isError = false,
}: AmountSelectorProps) => {
  const [inputValue, setInputValue] = useState(value);

  const numericValue = Number(value.replace(/\s/g, ""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clear = e.target.value.replace(/\s/g, "").replace(",", ".");
    if (!/^\d*\.?\d*$/.test(clear)) return;

    setInputValue(clear);

    const num = Number(clear);
    if (!isNaN(num)) {
      onChange(Math.min(max, Math.max(min, num)));
    }
  };

  const handleIncrement = () => {
    onChange(Math.min(numericValue + step, max));
  };

  const handleDecrement = () => {
    onChange(Math.max(numericValue - step, min));
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <AmountSelectorWrapper>
      <AmountTitle titleAlign={titleAlign}>{title}</AmountTitle>
      <AmountContainer isError={isError}>
        <AmountLabel>{label}</AmountLabel>
        <AmountWrapper>
          <AmountIconButton
            size="small"
            onClick={handleDecrement}
            disabled={numericValue <= min}
          >
            <RemoveIcon />
          </AmountIconButton>

          <AmountValueInput
            type="text"
            value={inputValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
            pattern="[0-9]*[.,]?[0-9]*"
          />

          <AmountIconButton
            size="small"
            onClick={handleIncrement}
            disabled={numericValue >= max}
          >
            <AddIcon />
          </AmountIconButton>
        </AmountWrapper>
      </AmountContainer>
    </AmountSelectorWrapper>
  );
};
