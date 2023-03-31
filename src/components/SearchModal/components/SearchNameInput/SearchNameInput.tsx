import Input from "@/components/Input";
import { useFormContext } from "react-hook-form";

const SearchNameInput = () => {
  const { control } = useFormContext();

  return (
    <Input
      controlProps={{
        control,
        name: "name",
        rules: {
          required: "필수값입니다!",
        },
      }}
      variant="outlined"
      placeholder="당신의 향수를 찾아보세요"
    />
  );
};

export default SearchNameInput;
