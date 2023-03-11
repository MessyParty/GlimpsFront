import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "@mui/material";

export default {
  title: "paging/mui",
  components: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = () => {
  return <Pagination showFirstButton showLastButton count={10} />;
};
