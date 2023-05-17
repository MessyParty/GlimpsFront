import Input from "@/components/Input";
import { useFormContext } from "react-hook-form";

const TitleInput = () => {
  const { control } = useFormContext();

  return (
    <Input
      controlProps={{
        control,
        name: "title",
        rules: {
          required: "필수값입니다!",
          maxLength: { value: 15, message: "15글자 이상 입력 해주세요!" },
        },
      }}
      variant="standard"
    />
  );
};

export default TitleInput;
