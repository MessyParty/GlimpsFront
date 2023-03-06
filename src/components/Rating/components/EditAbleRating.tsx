import { Rating, RatingProps } from "@mui/material";
import {
  FieldValues,
  FieldPath,
  UseControllerProps,
  useController,
} from "react-hook-form";

const EditAbleRating = <
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
>({
  controlProps,
  ...props
}: { controlProps: UseControllerProps<T, K> } & RatingProps) => {
  const { field } = useController({ ...controlProps });

  return (
    <Rating {...field} {...props} onChange={(e, v) => field.onChange(v)} />
  );
};

export default EditAbleRating;
