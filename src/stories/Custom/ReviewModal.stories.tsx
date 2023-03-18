import ReviewModal from "@/components/ReviewModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "custom/review form",
  component: ReviewModal,
} as ComponentMeta<typeof ReviewModal>;

export const Default: ComponentStory<typeof ReviewModal> = () => {
  return <ReviewModal perfumeUuid="test" />;
};
