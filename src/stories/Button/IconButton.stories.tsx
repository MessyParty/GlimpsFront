import LikeButton from "@/components/LikeButton";
import { Perfume } from "@/components/CustomIcon";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button/Like",
  component: LikeButton,
} as ComponentMeta<typeof LikeButton>;

export const Default: ComponentStory<typeof LikeButton> = () => {
  return <LikeButton initialState={false} />;
};

export const PerfumeIcon: ComponentStory<typeof Perfume> = () => {
  return <Perfume />;
};
