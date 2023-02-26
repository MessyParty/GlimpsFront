import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReviewCard from "@/components/ReviewCard";

export default {
  title: "ReviewCard",
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>;

export const Default: ComponentStory<typeof ReviewCard> = () => {
  return (
    <ReviewCard
      imgSrc="https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg"
      reviewTitle="hello world!"
      author="testor"
      score={2.5}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales luctus justo lacinia efficitur"
      sx={{
        height: "370px",
      }}
    />
  );
};
