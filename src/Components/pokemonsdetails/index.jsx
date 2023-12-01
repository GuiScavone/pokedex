import React from "react";
import { Container, PokemonImageContainer, PokemonInfoContainer, PokemonImage } from "./styled";
import ProgressBar from "../progressbar";
import getTypeInfo from "../../utils/typecolors";

const PokemonDetails = (props) => {
  const { pokemon } = props;

  return (
    <Container>
      <PokemonImageContainer>
        <PokemonImage
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
        />
      </PokemonImageContainer>
      <PokemonInfoContainer>
        <h1>
          {pokemon.name} #{pokemon.id}
        </h1>
        <p>
          {pokemon.types.map((type, index) => {
            const { name } = getTypeInfo(type);
            return (
              <span key={index}>
                {index > 0 && " | "} {name}
              </span>
            );
          })}
        </p>
        <h1>Status</h1>
        <div>
          {pokemon.stats &&
            pokemon.stats.map((stats, index) => {
              return (
                <ProgressBar
                  key={index}
                  title={stats.stat.name}
                  width={stats.base_stat}
                  text={stats.base_stat}
                />
              );
            })}
        </div>
        <ProgressBar />
      </PokemonInfoContainer>
    </Container>
  );
};

export default PokemonDetails;