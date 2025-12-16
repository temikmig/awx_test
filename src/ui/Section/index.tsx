import { Typography } from "@mui/material";
import type { ReactNode } from "react";
import { SectionStyled } from "./Section.styled";

interface SectionProps {
  title?: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <SectionStyled component="section">
      {title && (
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
      )}
      <SectionStyled>{children}</SectionStyled>
    </SectionStyled>
  );
};
