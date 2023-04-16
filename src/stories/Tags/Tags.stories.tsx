import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tags from "@/components/Tags";
import Typography from "@mui/material/Typography";

export default {
  title: "custom/tag",
  component: Tags,
} as ComponentMeta<typeof Tags>;

export const Default: ComponentStory<typeof Tags> = () => {
  return <Tags label="# 고급스러운" />;
};

export const WithTypo: ComponentStory<typeof Tags> = () => {
  return <Tags label={<Typography># 고급스러운</Typography>} />;
};
