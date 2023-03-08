import { useController } from "react-hook-form";
import type {
  FieldPath,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { TextField, OutlinedTextFieldProps } from "@mui/material";

interface OverriedInputProps extends OutlinedTextFieldProps {}

const Input = <
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
>({
  controlProps,
  ...props
}: { controlProps: UseControllerProps<T, K> } & OverriedInputProps) => {
  const { field } = useController({ ...controlProps });

  return <TextField {...props} {...field} />;
};

export default Input;
