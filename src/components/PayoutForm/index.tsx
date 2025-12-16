import { Section } from "@/ui/Section";
import { PayoutMethodTabs } from "./components/PayoutMethodTabs";
import { Requisites } from "./components/Requisites";
import { AmountSelectors } from "./components/AmountSelectors";
import { Container } from "./PayoutForm.styled";

export const PayoutForm = () => {
  return (
    <Container>
      <Section title="Способ вывода">
        <PayoutMethodTabs />
      </Section>
      <Section title="Объемы">
        <AmountSelectors />
      </Section>
      <Requisites />
    </Container>
  );
};
