import { Dialog, DialogProps, DialogContent, IconButton } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import useModal from "@/hooks/useModal";

interface ModalProps extends DialogProps {
  modalKey: string;
  modalTitle?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

const Modal = ({ modalKey, title, content, actions, ...props }: ModalProps) => {
  const { isOpen, closeModal } = useModal(modalKey);

  return (
    <Dialog
      {...props}
      open={isOpen}
      onClose={closeModal}
      sx={{ "& .MuiPaper-root": { borderRadius: "0px" } }}
    >
      {title ? title : null}
      {content ? (
        <DialogContent
          style={{
            border: "2px solid",
          }}
        >
          <IconButton onClick={closeModal} style={{ float: "right" }}>
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
