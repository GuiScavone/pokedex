import React, { Children } from "react";
import { ModalContainer, ModalCard, ModalFooter } from "./styled";

const Modal = ({ isOpen, setModalOpen, children, selectedPokemon }) => {
  if (isOpen && selectedPokemon) {
    const {name, types} = selectedPokemon;

    return (
      <ModalContainer>
        <ModalCard>
          <div>
            <ModalFooter onClick={setModalOpen}>X</ModalFooter>
            <h1>{name}</h1>
            <h2>{types}</h2>
          </div>
          {children}
        </ModalCard>
      </ModalContainer>
    );
  }
  return null;
};

export default Modal;
