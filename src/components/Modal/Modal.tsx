import { Dialog, DialogProps, DialogContent } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalOpenState } from "@/recoil/modalState";

interface ModalProps extends DialogProps {
  modalTitle?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

const Modal = ({ title, content, actions, ...props }: ModalProps) => {
  const [isOpen, setIsOpen] = useRecoilState(modalOpenState);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog {...props} open={isOpen} onClose={handleClose}>
      {title ? title : null}
      {content ? <DialogContent>{content}</DialogContent> : null}
      {actions ? actions : null}
    </Dialog>
  );
};

export default Modal;
