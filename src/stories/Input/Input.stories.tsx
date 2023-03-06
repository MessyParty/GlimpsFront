import Input from "@/components/Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";

export default {
  title: "Input/textfield",
  component: Input,
} as ComponentMeta<typeof Input>;

type FormType = {
  test: string;
};

export const Glims: ComponentStory<typeof Input> = () => {
  const { control, handleSubmit } = useForm({ defaultValues: { test: "" } });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input controlProps={{ name: "test", control }} variant="outlined" />
      <button type="submit">submit</button>
    </form>
  );
};
