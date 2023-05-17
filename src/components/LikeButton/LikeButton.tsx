/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useDebounce from "@/hooks/useDebounce";
import styled from "@emotion/styled";

type LikeButtonType = {
  initialState?: boolean;
  likeCnt?: number;
};

// temporary fetch function
// TODO: react-query custom hook화
const tempFetchFunction = (): void => {
  console.log("fetch function called");
};

const LikeButton = ({ initialState, likeCnt }: LikeButtonType) => {
  const [selected, setSelected] = useState<boolean>(initialState ?? false);
  const apiFetch = useDebounce({ callBack: tempFetchFunction, timeout: 2000 });

  const handleClick = (event: React.SyntheticEvent) => {
    setSelected((prev) => !prev);
    apiFetch();
  };

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleClick}
        disableRipple
        style={{ padding: "6px" }}
      >
        {selected ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
      <LikeCnt>{likeCnt ?? 0}</LikeCnt>
    </>
  );
};

export default LikeButton;

const LikeCnt = styled.div`
  display: inline-block;
  font-size: 18px;
  vertical-align: middle;
  line-height: 18px;
`;
