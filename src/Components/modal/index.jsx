import React, { Children } from "react";
import { ModalContainer, ModalCard, ModalFooter } from "./styled";

const Modal = ({ isOpen, setModalOpen, children, pokeinfo }) => {
  if (isOpen) {
    return (
      <ModalContainer>
        <ModalCard>
          <div>
            <ModalFooter onClick={setModalOpen}>X</ModalFooter>
            <h1>{pokeinfo.name}</h1>
          </div>
          {children}
        </ModalCard>
      </ModalContainer>
    );
  }
  return null;
};

export default Modal;
