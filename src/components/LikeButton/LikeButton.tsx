import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type LikeButtonType = {
  initialState?: boolean;
};

const LikeButton = ({ initialState }: LikeButtonType) => {
  const [selected, setSelected] = useState<boolean>(initialState ?? false);

  const handleClick = (event: React.SyntheticEvent) =>
    setSelected((prev) => !prev);

  return (
    <IconButton onClick={handleClick} disableRipple>
      {selected ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default LikeButton;
