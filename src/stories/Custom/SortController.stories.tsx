import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SortController from "@/components/SortController";

export default {
  title: "custom/sortController",
  component: SortController,
} as ComponentMeta<typeof SortController>;

type OrderType = "DATE" | "HEARTS_COUNT";

export const Default: ComponentStory<typeof SortController> = () => {
  const [_, setValue] = useState<OrderType>("DATE");

  return <SortController orderCb={setValue} />;
};

export const WithButton: ComponentStory<typeof SortController> = () => {
  const [_, setValue] = useState<OrderType>("DATE");

  return (
    <SortController orderCb={setValue} addBtn pid="test1" pName="channel" />
  );
};
