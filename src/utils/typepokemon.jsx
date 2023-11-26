// TipoPokemon.js
import React from "react";
import { PokemonTypeText, TypeImage } from "./styled";

const TipoPokemon = ({ typeName, color }) => {
  return (
    <PokemonTypeText type={typeName}>
      <TypeImage image={color} />
      {typeName}
    </PokemonTypeText>
  );
};

export default TipoPokemon;

export const TypeImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PokemonTypeText = styled.div`
  background: ${(props) => typecolors[props.type]};
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px;
  color: #fff;
`;