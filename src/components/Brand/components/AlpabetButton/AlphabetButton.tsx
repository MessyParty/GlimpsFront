import React from "react";
import styled from "@emotion/styled";
import Button from "@/components/Button";

import { brandData } from "@root/__mocks__/brandData";

type MoveScrollProps = {
  onMoveToElement: (id: string) => void;
};

export default function AlphabetButton({ onMoveToElement }: MoveScrollProps) {
  return (
    <ButtonList>
      {brandData.map((data) => (
        <li key={data.id}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => onMoveToElement(data.alphabet)}
          >
            {data.alphabet}
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
