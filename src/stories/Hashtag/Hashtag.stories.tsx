import Hashtag from "../../components/Hashtag/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Hashtag",
  component: Hashtag,
} as ComponentMeta<typeof Hashtag>;

const hashtagList = "고급스러운";

export const Default: ComponentStory<typeof Hashtag> = () => {
  return <Hashtag label={hashtagList} />;
};
