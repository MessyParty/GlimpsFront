import Rating from "@/components/Rating";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";

export default {
  title: "Input/rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

export const Default: ComponentStory<typeof Rating> = () => {
  return <Rating defaultValue={2.5} precision={0.5} />;
};

type TestFormType = {
  score: number;
};

export const Editable: ComponentStory<typeof Rating> = () => {
  const { control, handleSubmit } = useForm<TestFormType>({
    defaultValues: {
      score: 0,
    },
  });

  const onSubmit = (data: TestFormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Rating
        controlProps={{ name: "score", control }}
        precision={0.5}
        defaultValue={0}
      />
      <button type="submit">submit</button>
    </form>
  );
};
