import { ButtonStyled } from "./PayoutMethodTab.styled";

interface PayoutMethodTabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const PayoutMethodTab = ({
  label,
  active,
  onClick,
}: PayoutMethodTabProps) => {
  return (
    <ButtonStyled active={active} fullWidth onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
