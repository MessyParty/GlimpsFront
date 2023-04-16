import Input from "@/components/Input";
import { useFormContext } from "react-hook-form";

const Description = () => {
  const { control } = useFormContext();

  return (
    <Input
      controlProps={{
        control,
        name: "body",
        rules: {
          required: "필수값입니다!",
          minLength: { value: 15, message: "15글자 이상 입력 해주세요!" },
        },
      }}
      multiline
      rows={4}
      variant="outlined"
    />
  );
};

export default Description;
