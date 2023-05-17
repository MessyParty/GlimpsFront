import { useEffect } from "react";
import styled from "@emotion/styled";
import { Input, MenuItem, Select } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const OPTIONS: { value: string; name: string }[] = [
  { value: "brand", name: "Brand" },
  { value: "perfume", name: "Perfume" },
  { value: "notes", name: "Notes" },
];

type OptionType = "brand" | "perfume" | "notes";

interface SearchSelectProps {
  optionCb: React.Dispatch<React.SetStateAction<OptionType>>;
}

export default function SearchSelect({ optionCb }: SearchSelectProps) {
  const methods = useFormContext();
  const { setValue } = methods;

  useEffect(() => {
    setValue("option", "brand");
  }, [setValue]);

  const handleChange = (event: SelectChangeEvent<OptionType>) => {
    const value = event.target.value as OptionType;
    setValue("option", value);
    optionCb(value);
  };

  return (
    <Wrapper>
      <FormControl fullWidth>
        <Select
          labelId="search-select-label"
          id="search-select"
          value={methods.watch("option")}
          label="Option"
          onChange={handleChange}
          input={<CustomInput disableUnderline />}
          style={{
            padding: ".7rem 0",
            borderRight: "1px solid #000",
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 137px;
  max-width: 137px;
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
