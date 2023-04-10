import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import Button from "@/components/Button";

import { brandData } from "@root/__mocks__/brandData";

type MoveScrollProps = {
  onMoveToElement: (i: number) => void;
  alphabet: string;
};

export default function AlphabetButton({
  onMoveToElement,
  alphabet = "",
}: MoveScrollProps) {
  return (
    <ButtonList>
      {Array.from(alphabet).map((letter, index) => (
        <li key={letter}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => onMoveToElement(index)}
          >
            {letter}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
}

const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 0;
  & li {
    & button {
      border-radius: 0;
      width: 65px;
      height: 65px;
      margin: 10px;
    }
  }
`;
