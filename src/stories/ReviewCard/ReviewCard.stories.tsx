import ReviewCard from "../../components/ReviewCard/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ReviewCard",
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>;

export const Default: ComponentStory<typeof ReviewCard> = () => {
  return (
    <ReviewCard
      title="처음 분사"
      description="처음"
      brand="cannel"
      productName="eau tendre"
    />
  );
};
