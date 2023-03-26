import styled from "@emotion/styled";

type SpacerProps = {
  y?: number;
};

const Spacer = styled.div<SpacerProps>`
  height: ${(props) => (props.y ? `${props.y}rem` : "1rem")};
`;

export default Spacer;
