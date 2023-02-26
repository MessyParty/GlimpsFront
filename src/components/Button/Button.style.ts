import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  customcolor?: string;
  fontcolor?: string;
}

const CustomButton = styled(Button)<CustomButtonProps>`
  ${({ customcolor }) => css`
    background-color: ${customcolor};
    &:hover {
      background-color: ${customcolor};
    }
  `}
  ${({ fontcolor }) =>
    !!fontcolor &&
    css`
      color: ${fontcolor};
    `}
`;

export default CustomButton;
