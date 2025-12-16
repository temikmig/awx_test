import { Container, PercentBox } from "./PercentContainer.styled";

interface PercentContainerProps {
  value: number;
}

export const PercentContainer = ({ value }: PercentContainerProps) => {
  const thresholds = [0, 50, 75, 100];

  return (
    <Container>
      {thresholds.map((threshold, index) => {
        const isFilled = value >= threshold;
        const label =
          index === 0
            ? "min"
            : index === thresholds.length - 1
            ? "max"
            : `${threshold}%`;

        return <PercentBox key={threshold} isFilled={isFilled} label={label} />;
      })}
    </Container>
  );
};
