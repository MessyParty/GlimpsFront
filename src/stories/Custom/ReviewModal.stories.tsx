import ReviewModal from "@/components/ReviewModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "@/components/Modal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import useModal from "@/hooks/useModal";

export default {
  title: "custom/review form",
  component: ReviewModal,
} as ComponentMeta<typeof ReviewModal>;

export const Default: ComponentStory<typeof ReviewModal> = () => {
  return <ReviewModal perfumeUuid="test" />;
};

export const WithModal: ComponentStory<typeof ReviewModal> = () => {
  const { isOpen, openModal } = useModal(MODAL_KEYS.review);

  return (
    <>
      <button onClick={openModal}>open</button>
      <Modal
        modalKey={MODAL_KEYS.review}
        open={isOpen}
        content={<ReviewModal perfumeUuid="test2" />}
        fullWidth
        maxWidth="lg"
      />
    </>
  );
};
