import { PercentContainer } from "../PercentContainer";
import { AmountSelector } from "./AmountSelector/index";
import { Container } from "./AmountSelectors.styled";

export const AmountSelectors = () => {
  return (
    <>
      <Container>
        <AmountSelector
          title="Отдаете (лот 1000)"
          titleAlign="left"
          label="Ethereum, ETH"
          defaultValue={1300}
        />
        <AmountSelector
          title="Получаете (лот 1000)"
          titleAlign="right"
          label="Рубль, RUR"
          defaultValue={1200}
        />
      </Container>
      <PercentContainer value={60} />
    </>
  );
};
