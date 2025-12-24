import { formatNumber } from "@/common/utils";
import { AmountSelector } from "./AmountSelector";
import { useCalculator } from "@/hooks/useCalculator";
import { Container } from "./AmountSelectors.styled";

export const AmountSelectors = () => {
  const { rur, eth, isError } = useCalculator();

  return (
    <Container>
      <AmountSelector
        title="Отдаете (лот 1000)"
        titleAlign="left"
        label="Ethereum, ETH"
        value={formatNumber(eth.value)}
        min={eth.min}
        max={eth.max}
        step={eth.step}
        onChange={eth.onChange}
        isError={isError}
      />

      <AmountSelector
        title="Получаете (лот 1000)"
        titleAlign="right"
        label="Рубль, RUR"
        value={formatNumber(rur.value)}
        min={rur.min}
        max={rur.max}
        step={rur.step}
        onChange={rur.onChange}
        isError={isError}
      />
    </Container>
  );
};
