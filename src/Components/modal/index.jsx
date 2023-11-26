import React, { Children } from "react";
import { ModalContainer, ModalCard, ModalFooter } from "./styled";

const Modal = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <ModalContainer>
        <ModalCard>
          <div>
            <ModalFooter onClick={setModalOpen}>X</ModalFooter>
          </div>
          {children}
        </ModalCard>
      </ModalContainer>
    );
  }
  return null;
};

export default Modal;
