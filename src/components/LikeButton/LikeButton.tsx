/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useDebounce from "@/hooks/useDebounce";

type LikeButtonType = {
  initialState?: boolean;
};

// temporary fetch function
// TODO: react-query custom hook화
const tempFetchFunction = (): void => {
  console.log("fetch function called");
};

const LikeButton = ({ initialState }: LikeButtonType) => {
  const [selected, setSelected] = useState<boolean>(initialState ?? false);
  const apiFetch = useDebounce({ callBack: tempFetchFunction, timeout: 2000 });

  const handleClick = (event: React.SyntheticEvent) => {
    setSelected((prev) => !prev);
    apiFetch();
  };

  return (
    <IconButton onClick={handleClick} disableRipple>
      {selected ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default LikeButton;
