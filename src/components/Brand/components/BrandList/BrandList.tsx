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
        <div key={perfume.id}>
          <button className="perfume-button">
            <BrandEn>{perfume.brand}</BrandEn>
            <BrandKr>{perfume.brandKr}</BrandKr>
          </button>
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
      justify-content: flex-start;
    }
  }
`;

const BrandEn = styled.p`
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
`;

const BrandKr = styled.p`
  font-size: 20px;
  padding: 10px 0;
`;
