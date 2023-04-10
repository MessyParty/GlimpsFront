import React from "react";
import styled from "@emotion/styled";

type PerfumeData = {
  brandId: number;
  brandName: string;
};

interface BrandListProps {
  filteredBrands: PerfumeData[];
}

export default function BrandList({ filteredBrands }: BrandListProps) {
  return (
    <BrandContainer>
      {filteredBrands?.map(({ brandId, brandName }) => (
        <div key={brandId}>
          <button className="perfume-brand">{brandName}</button>
        </div>
      ))}
    </BrandContainer>
  );
}

const BrandContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;

  & div {
    margin: 1rem 0;
    & .perfume-button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const BrandEn = styled.span`
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
`;

const BrandKr = styled.span`
  font-size: 20px;
  padding: 10px 0;
`;
