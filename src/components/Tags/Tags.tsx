import { Chip, ChipProps } from "@mui/material";
import styled from "@emotion/styled";

interface TagsProps extends ChipProps {}

const Tags = ({ ...props }: TagsProps) => {
  return <StyledChip {...props} variant="outlined" />;
};

export default Tags;

const StyledChip = styled(Chip)`
  &.MuiChip-root {
    border-radius: 0;
    border: 1px solid black;
  }
`;
