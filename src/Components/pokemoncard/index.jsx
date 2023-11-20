import React from "react";
import { Card, Content, Price, Description, Title, Button } from "./styled";
import Modal from "../modal";
import { useState } from "react";

const PokemonCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card>
        <Content>
          <Title>Name Pokkemon</Title>
          <Price>Types</Price>
          <Description>About</Description>
        </Content>
        <Button onClick={() => setOpenModal(true)}>More Info</Button>
      </Card>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteudo do Modal
      </Modal>
    </>
  );
};

export default PokemonCard;
