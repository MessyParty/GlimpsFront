import { modalStates } from "@/recoil/modalState";
import { useRecoilState } from "recoil";

const useModal = (key: string) => {
  const [isOpen, setIsOpen] = useRecoilState(modalStates(key));

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
