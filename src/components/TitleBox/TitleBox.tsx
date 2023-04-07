import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface TitleBoxProps {
  title: string;
  subtitle: string;
}

export default function TitleBox({ title, subtitle }: TitleBoxProps) {
  return (
    <BrandTitleBox>
      <Typography fontSize="33px" fontWeight="bold">
        {title}
      </Typography>
      <Typography fontSize="24px">{subtitle}</Typography>
    </BrandTitleBox>
  );
}
const BrandTitleBox = styled.div`
  width: 330px;
  padding: 2rem 0;
  margin: 3rem 0 5rem;
  border-top: 10px solid #000;
  border-bottom: 10px solid #000;
`;
