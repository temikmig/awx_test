import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { MenuItem, Typography } from "@mui/material";
import { useState } from "react";

import { BankSelect } from "./BankSelector.styled";
import { SelectedBank } from "./SelectedBank";

export const BankSelector = () => {
  const BANKS = ["Альфа-банк cash-in", "Сбербанк cash-in", "Тинькофф cash-in"];
  const [selectedBank, setSelectedBank] = useState(BANKS[0]);
  const EXCHANGE_RATE = 61.55;

  return (
    <BankSelect
      value={selectedBank}
      onChange={(e) => setSelectedBank(e.target.value as string)}
      fullWidth
      IconComponent={KeyboardArrowDownRounded}
      renderValue={(value) => (
        <SelectedBank name={value as string} exchangeRate={EXCHANGE_RATE} />
      )}
    >
      {BANKS.map((bank) => (
        <MenuItem key={bank} value={bank}>
          <Typography>{bank}</Typography>
        </MenuItem>
      ))}
    </BankSelect>
  );
};
