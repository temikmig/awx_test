export const roundNumber = (value: number, decimals = 6) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

export const formatNumber = (value: number, decimals = 2) => {
  const [intPart, decimalPart] = String(roundNumber(value, decimals)).split(
    "."
  );
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return decimalPart ? `${intFormatted}.${decimalPart}` : intFormatted;
};
