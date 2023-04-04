import React from "react";
import Button from "../Button";
import ExpandMoreIcon from "@mui/icons-material/Expand";
import { Menu, MenuItem } from "@mui/material";
import styled from "@emotion/styled";

interface SortControllerProps {
  orderCb: React.Dispatch<React.SetStateAction<"DATE" | "HEARTS_COUNT">>;
  addBtn?: boolean;
}

const SortController = ({ orderCb, addBtn }: SortControllerProps) => {};

export default SortController;

const ControllerWrapper = styled.div`
  display: flex;
  flex-direction: space-between;
`;
