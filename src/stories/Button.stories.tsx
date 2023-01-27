// 필요한 storybook type 입니다
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@mui/material";

// title은 대분류/이름 으로 작성하시면 됩니다
// component에는 import한 컴포넌트를 넣어 주시면 됩니다
export default {
  title: "EXAMPLE/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// template를 활용하는 방법 입니다.
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Hello World</Button>;
};

// 만들어둔 template에 bind 함수를 이용해서 예시 story를 만들 수 있습니다.
export const SampleWithTemplate = Template.bind({});
// 여기에서 component props를 조절 해주시면 됩니다
SampleWithTemplate.args = {
  color: "primary",
};
// template를 사용하지 않은 story입니다.
export const DefaultSample: ComponentStory<typeof Button> = () => {
  return <Button color="success">no template</Button>;
};
