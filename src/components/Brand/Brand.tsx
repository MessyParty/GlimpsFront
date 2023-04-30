import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { getBrand } from "@/apis/brand";
import useMoveScroll from "@/hooks/useMoveScroll";

import AlphabetButton from "@/components/Brand/components/AlpabetButton";
import BrandList from "@/components/Brand/components/BrandList";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Brand() {
  const { scrollRef, onMoveToElement } = useMoveScroll();
  const { data, isLoading, isError } = useQuery(["brand"], getBrand);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  const sortedBrands = data?.sort((a, b) =>
    a.brandNameEng.localeCompare(b.brandNameEng),
  );

  return (
    <>
      <AlphabetButton onMoveToElement={onMoveToElement} alphabet={ALPHABET} />
      {Array.from(ALPHABET).map((letter, index) => {
        const filteredBrands = sortedBrands?.filter(
          (brand) => brand.brandNameEng.toUpperCase().indexOf(letter) === 0,
        );
        return (
          <BrandBox key={letter}>
            <BrandListTitle
              id={letter}
              ref={(ref) => (scrollRef.current[index] = ref as HTMLDivElement)}
            >
              {letter}
            </BrandListTitle>
            {filteredBrands?.length === 0 ? (
              <p>{""}</p>
            ) : (
              <BrandList filteredBrands={filteredBrands} />
            )}
          </BrandBox>
        );
      })}
    </>
  );
}

const BrandListTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const BrandBox = styled.div`
  margin: 5rem;
`;
