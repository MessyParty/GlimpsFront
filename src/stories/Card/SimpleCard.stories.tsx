import SimpleReviewCard from "@/components/SimpleReviewCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "card/simplereviewcard",
  component: SimpleReviewCard,
} as ComponentMeta<typeof SimpleReviewCard>;

export const Default: ComponentStory<typeof SimpleReviewCard> = () => {
  return (
    <SimpleReviewCard
      imgSrc="https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg"
      title="처음 분사했을 때의 느낌을 잊지 못해요. 깔끔한 첫 향과 시간이 지난 후의 잔향까지."
      score={5}
      likeCnt={16}
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales luctus justo lacinia efficitur"
    />
  );
};
