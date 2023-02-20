import Rating from "@/components/Rating";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Input/rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

export const Default: ComponentStory<typeof Rating> = () => {
  return <Rating />;
};
