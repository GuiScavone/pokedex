import React, { useContext, useState } from "react";
import {
  PokemonCardContainer,
  PokemonImageContainer,
  PokemonImage,
  CardBody,
  CardTop,
  PokemonName,
  PokemonId,
  CardBottom,
  PokemonType,
  PokemonTypeText,
  Button,
  TypeImage,
} from "./styled";
import Modal from "../modal";
import PokemonDetails from "../pokemonsdetails";
import typecolors from "../typecolors";
import getTypeInfo from "../../utils/typecolors";


const Pokemon = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { pokemon } = props;


  return (
    <PokemonCardContainer>
      <PokemonImageContainer>
        <PokemonImage
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </PokemonImageContainer>
      <CardBody>
        <CardTop>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonId>#{pokemon.id}</PokemonId>
        </CardTop>
        <CardBottom>
        <PokemonType>
        {pokemon.types.map((type, index) => {
          const { name, color } = getTypeInfo(type);
          return (
            <PokemonTypeText key={index} type={name}>
              <TypeImage image={color} />
              {name}
            </PokemonTypeText>
          );
        })}
      </PokemonType>
          <Button onClick={() => setOpenModal(true)}>More Info</Button>
        </CardBottom>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)} >
          <PokemonDetails pokemon={pokemon} />
        </Modal>
      </CardBody>
    </PokemonCardContainer>
  );
};

export default Pokemon;
