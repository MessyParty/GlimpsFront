import { Dialog, DialogProps, DialogContent, IconButton } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalOpenState } from "@/recoil/modalState";
import { CloseOutlined } from "@mui/icons-material";

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
      {content ? (
        <DialogContent
          style={{
            border: "1px solid",
            borderRadius: 0,
          }}
        >
          <IconButton onClick={handleClose} style={{ float: "right" }}>
            <CloseOutlined />
          </IconButton>
          {content}
        </DialogContent>
      ) : null}
      {actions ? actions : null}
    </Dialog>
  );
};

export default Modal;
