import { ComponentStory, ComponentMeta } from "@storybook/react";
import BrandCard from "@/components/BrandCard";

export default {
  title: "BrandCard",
  component: BrandCard,
} as ComponentMeta<typeof BrandCard>;

export const Default: ComponentStory<typeof BrandCard> = () => {
  return (
    <BrandCard
      imgSrc="https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg"
      brandName="AESOP"
      score={4.5}
      perfumeName="테싯 오 드 퍼퓸"
      sx={{
        height: "540px",
      }}
    />
  );
};
