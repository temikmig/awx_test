import { Box, Typography, InputBase } from "@mui/material";
import { useState } from "react";
import { EditIcon } from "@/assets/icons/EditIcon";
import { Section } from "@/ui/Section";
import { RadioStyled } from "@/ui/Radio";
import { CheckboxStyled } from "@/ui/Checkbox";
import {
  RequisitesCardContainer,
  RequisitesFormControlLabel,
  RequisitesRadioGroup,
} from "./RequisitesSection.styled";
import { InputStyled } from "@/ui/Input";

export const Requisites = () => {
  const [saveRequisites, setSaveRequisites] = useState(true);
  const [type, setType] = useState("card");

  return (
    <Section>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={1}>
        <Typography variant="h6" fontWeight={600}>
          Реквизиты
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" whiteSpace="nowrap" fontSize={16}>
            Сохранить реквизиты
          </Typography>
          <CheckboxStyled
            checked={saveRequisites}
            onChange={(e) => setSaveRequisites(e.target.checked)}
          />
        </Box>
      </Box>

      <RequisitesCardContainer>
        <RequisitesRadioGroup
          row
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <RequisitesFormControlLabel
            value="card"
            control={<RadioStyled />}
            label="Номер карты"
          />
          <RequisitesFormControlLabel
            value="contract"
            control={<RadioStyled />}
            label="Номер договора"
          />
        </RequisitesRadioGroup>
        <InputBase
          placeholder={type === "card" ? "Номер карты" : "Номер договора"}
          endAdornment={<EditIcon />}
        />
      </RequisitesCardContainer>
      <InputStyled placeholder="ФИО владельца" endAdornment={<EditIcon />} />
      <InputStyled placeholder="Адрес" endAdornment={<EditIcon />} />
    </Section>
  );
};
