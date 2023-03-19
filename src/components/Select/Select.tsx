import {
  FormControl,
  Select as MuiSelect,
  SelectProps,
  MenuItem,
  MenuItemProps,
} from "@mui/material";
import { useController } from "react-hook-form";
import type {
  FieldPath,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import React from "react";

interface CustomSelectProps<T = UseControllerProps> extends SelectProps {
  wrapper?: React.FC;
  formProps: T;
  names?: { value: string; name: string }[];
  menuItemProps?: MenuItemProps;
}

const Select = <
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
>({
  formProps,
  names,
  menuItemProps,
  ...props
}: CustomSelectProps<UseControllerProps<T, K>>) => {
  const Wrapper = props.wrapper || React.Fragment;
  const { field } = useController({ ...formProps });

  return (
    <Wrapper>
      <FormControl sx={{ width: "100%", height: "100%" }}>
        <MuiSelect {...field} {...props}>
          {names?.map(({ name, value }) => (
            <MenuItem key={value} value={value} {...menuItemProps}>
              {name}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Wrapper>
  );
};

export default Select;
