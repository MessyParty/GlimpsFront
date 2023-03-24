import React from "react";
import styled from "@emotion/styled";

type Perfume = {
  id: number;
  brand: string;
  brandKr: string;
};

interface BrandListProps {
  perfumeList: Perfume[];
}

export default function BrandList({ perfumeList }: BrandListProps) {
  return (
    <BrandContainer>
      {perfumeList?.map((perfume) => (
        <ul key={perfume.id}>
          <BrandEn>{perfume.brand}</BrandEn>
          <BrandKr>{perfume.brandKr}</BrandKr>
        </ul>
      ))}
    </BrandContainer>
  );
}

const BrandContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;

  & ul {
    margin: 1rem 0;
  }
`;

const BrandEn = styled.li`
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
`;

const BrandKr = styled.li`
  font-size: 20px;
  padding: 10px 0;
`;
