import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

type PerfumeData = {
  brandId: number;
  brandNameKor: string;
  brandNameEng: string;
};

interface BrandListProps {
  filteredBrands: PerfumeData[];
}

export default function BrandList({ filteredBrands }: BrandListProps) {
  return (
    <BrandContainer>
      {filteredBrands?.map(({ brandId, brandNameKor, brandNameEng }) => (
        <div key={brandId}>
          <Link
            href={`/perfumes?brand=${encodeURIComponent(brandNameEng)}`}
            legacyBehavior
          >
            <a>
              <p className="perfume-brand">{`${brandNameEng}`.toUpperCase()}</p>
              <p className="perfume-brand">{brandNameKor}</p>
            </a>
          </Link>
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
    & .perfume-brand {
      font-size: 20px;
      padding: 10px 0;
    }
  }
`;
