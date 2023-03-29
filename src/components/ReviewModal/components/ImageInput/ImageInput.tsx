/* eslint-disable @next/next/no-img-element */
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

const fileReader = new FileReader();

const ImageInput = () => {
  const { control } = useFormContext();
  const [thumbnail, setThumbnail] = useState("");
  const img = useWatch({
    control,
    name: "photo",
  });

  useEffect(() => {
    if (!img) return;
    fileReader.readAsDataURL(img[0]);
    fileReader.onload = () => {
      const { result } = fileReader;
      if (typeof result !== "string") return;
      setThumbnail(result);
    };
  }, [img]);

  return (
    <ImageInputWrapper>
      <InputWrapper>
        <IconButton component="label">
          <HiddenInput control={control} name="photo" />
          <AddAPhotoIcon />
        </IconButton>
      </InputWrapper>
      {thumbnail ? (
        <PreviewWrapper>
          <img src={thumbnail} alt="" />
        </PreviewWrapper>
      ) : null}
    </ImageInputWrapper>
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

const ImageInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const InputWrapper = styled(Box)`
  padding: 1rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
