import { brandData } from "@root/__mocks__/brandData";
import React from "react";
import AlphabetButton from "./components/AlpabetButton/index";
import BrandList from "./components/BrandList";
import styled from "@emotion/styled";
import useMoveScroll from "@/hooks/useMoveScroll";

export default function Brand() {
  const { targetRef, onMoveToElement } = useMoveScroll();

  return (
    <>
      <AlphabetButton onMoveToElement={onMoveToElement} />
      {brandData.map((data) => (
        <BrandBox key={data.id}>
          <BrandListTitle id={data.alphabet} ref={targetRef}>
            {data.alphabet}
          </BrandListTitle>
          <BrandList perfumeList={data.perfumeList} />
        </BrandBox>
      ))}
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
