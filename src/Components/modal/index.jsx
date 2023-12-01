import React from "react";
import { ModalContainer, ModalCard, ModalFooter, ModalCloseButton } from "./styled";

const Modal = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <ModalContainer>
        <ModalCard>
          <ModalFooter onClick={setModalOpen}>
            <ModalCloseButton>X</ModalCloseButton>
          </ModalFooter>
          {children}
        </ModalCard>
      </ModalContainer>
    );
  }
  return null;
};

export default Modal;