import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useFormContext, useController, useWatch } from "react-hook-form";
import type {
  FieldPath,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import styled from "@emotion/styled";

const ImageInput = () => {
  const { control } = useFormContext();
  const img = useWatch({
    control,
    name: "photo",
  });

  useEffect(() => {
    if (img) console.log(img);
  }, [img]);

  return (
    <div>
      <InputWrapper>
        <IconButton component="label">
          <HiddenInput control={control} name="photo" />
          <AddAPhotoIcon />
        </IconButton>
      </InputWrapper>
    </div>
  );
};

const HiddenInput = <
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
>({
  ...props
}: UseControllerProps<T, K>) => {
  const { field } = useController({ ...props });
  const [value, setValue] = useState(field.value ?? "");

  return (
    <input
      {...field}
      hidden
      type="file"
      accept="image/*"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        field.onChange(e.target.files);
      }}
    />
  );
};

export default ImageInput;

const InputWrapper = styled(Box)`
  padding: 1rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
