import { Box, Typography } from "@mui/material";
import { CurrencyIcon, SelectedBankContainer } from "./SelectedBank.styled";
import CurrencyRubleTwoToneIcon from "@mui/icons-material/CurrencyRubleTwoTone";

interface SelectedBankProps {
  name: string;
  exchangeRate: number;
}

export const SelectedBank = ({ name, exchangeRate }: SelectedBankProps) => (
  <SelectedBankContainer>
    <CurrencyIcon>
      <CurrencyRubleTwoToneIcon />
    </CurrencyIcon>
    <Box>
      <Typography>{name}</Typography>
      <Typography variant="body2" color="textSecondary">
        1 USDT = {exchangeRate} RUR
      </Typography>
    </Box>
  </SelectedBankContainer>
);
