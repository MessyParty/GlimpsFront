import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/Button";

export default {
  title: "MUI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const hashtag = "고급스러운";

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}># {hashtag}</Button>
);

export const Default: ComponentStory<typeof Button> = () => (
  <Button variant="text"># {hashtag}</Button>
);

export const Variants = Template.bind({});
Variants.args = {
  variant: "outlined",
  customTextColor: "#000",
};

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  customColor: "#000",
};
