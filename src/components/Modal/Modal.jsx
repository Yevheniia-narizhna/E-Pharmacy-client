import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { CloseBtn, Content, Overlay } from "./Modal.styled";

const modalRoot = document.getElementById("modal-root") || document.body;

const Modal = ({ isOpen, onClose, children }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <IoClose />
        </CloseBtn>
        {children}
      </Content>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
