import React from "react";
import { Select, MenuItem, SelectChangeEvent, Input } from "@mui/material";
import styled from "@emotion/styled";

type Order = "DATE" | "HEARTS_COUNT";

interface SortControllerProps {
  orderCb: React.Dispatch<React.SetStateAction<Order>>;
  addBtn?: boolean;
}

const SortController = ({ orderCb, addBtn }: SortControllerProps) => {
  const [value, setValue] = React.useState<Order>("DATE");

  const onChange = (e: SelectChangeEvent<Order>) => {
    const target = e.target.value as Order;
    setValue(target);
    orderCb(target);
  };

  return (
    <ControllerWrapper>
      <Select
        value={value}
        onChange={onChange}
        input={<CustomInput disableUnderline />}
      >
        <MenuItem value="DATE">날짜순</MenuItem>
        <MenuItem value="HEARTS_COUNT">추천순</MenuItem>
      </Select>
    </ControllerWrapper>
  );
};

export default SortController;

const ControllerWrapper = styled.div`
  display: flex;
  flex-direction: space-between;
`;

const CustomInput = styled(Input)`
  & > .MuiSelect-select {
    padding-right: 0px;
    padding-left: 32px;
  }
  & > .MuiSvgIcon-root {
    right: 0;
    left: 7px;
  }
`;
