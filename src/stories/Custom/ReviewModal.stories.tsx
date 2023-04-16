import ReviewModal from "@/components/ReviewModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "@/components/Modal";
import { useRecoilState } from "recoil";
import { modalOpenState } from "@/recoil/modalState";

export default {
  title: "custom/review form",
  component: ReviewModal,
} as ComponentMeta<typeof ReviewModal>;

export const Default: ComponentStory<typeof ReviewModal> = () => {
  return <ReviewModal perfumeUuid="test" />;
};

export const WithModal: ComponentStory<typeof ReviewModal> = () => {
  const [open, setOpen] = useRecoilState(modalOpenState);

  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      <Modal
        open={open}
        content={<ReviewModal perfumeUuid="test2" />}
        fullWidth
        maxWidth="lg"
      />
    </>
  );
};
