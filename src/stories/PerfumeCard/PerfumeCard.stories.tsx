import PerfumeCard from "../../components/PerfumeCard/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "PerfumeCard",
  component: PerfumeCard,
} as ComponentMeta<typeof PerfumeCard>;

const PerfumeCardList = "고급스러운";

export const Default: ComponentStory<typeof PerfumeCard> = () => {
  return <PerfumeCard brand="cannel" product="eau tendre" score={4.3} />;
};
