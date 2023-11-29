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
  CardAbout,
  StatContainer,
  Label,
  ValueBox,
} from "./styled";
import Modal from "../modal";
import PokemonDetails from "../pokemonsdetails";
import typecolors from "../typecolors";
import getTypeInfo from "../../utils/typecolors";

const generateGradientColors = (types) => {
  const color1 = typecolors[types[0]] || "rgba(0, 0, 0, 0.75)";
  const color2 = typecolors[types[1]] || "rgba(0, 0, 0, 0.75)";
  return [color1, color2];
};

const convertHeightToMeters = (height) => {
  return (height / 10).toFixed(1);
};

const convertWeightToKilograms = (weight) => {
  return (weight / 10).toFixed(1);
};

const Pokemon = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { pokemon } = props;
  const gradientColors = generateGradientColors(
    pokemon.types.map((type) => type.type.name)
  );

  return (
    <PokemonCardContainer>
      <PokemonImageContainer>
        <PokemonImage alt={pokemon.name} src={pokemon.sprites.front_default} />
      </PokemonImageContainer>
      <CardBody gradientColors={gradientColors}>
        <CardTop>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonId>#{pokemon.id}</PokemonId>
        </CardTop>

        <CardBottom>
          <PokemonType>
            {pokemon.types.map((type, index) => (
              <PokemonTypeText key={index} type={type.type.name}>
                <TypeImage image={typecolors[type.type.name]} />
                <Label>{type.type.name}</Label>
              </PokemonTypeText>
            ))}
          </PokemonType>
          <CardAbout>
            <StatContainer>
              <Label>Height</Label>
              <ValueBox>{convertHeightToMeters(pokemon.height)} M</ValueBox>
            </StatContainer>
            <StatContainer>
              <Label>Weight</Label>
              <ValueBox>{convertWeightToKilograms(pokemon.weight)} KG</ValueBox>
            </StatContainer>
          </CardAbout>
        </CardBottom>

        <Button onClick={() => setOpenModal(true)}>More Info</Button>

        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)}>
          <PokemonDetails pokemon={pokemon} />
        </Modal>
      </CardBody>
    </PokemonCardContainer>
  );
};

export default Pokemon;
