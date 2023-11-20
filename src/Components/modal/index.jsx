import React, { Children } from "react";
import { ModalContainer, ModalCard, ModalFooter } from "./styled";

const Modal = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <ModalContainer>
        <ModalCard>
          {children}
          <div>
            <ModalFooter onClick={setModalOpen}>Fechar</ModalFooter>
          </div>
        </ModalCard>
      </ModalContainer>
    );
  }
  return null;
};

export default Modal;
