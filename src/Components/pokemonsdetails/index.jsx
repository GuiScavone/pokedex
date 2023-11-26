// PokemonDetails.jsx
import React from "react";
import { Container, PokemonImage } from "./styled";
import ProgressBar from "../progressbar";
import getTypeInfo from "../../utils/typecolors";

const PokemonDetails = (props) => {
  const { pokemon } = props;

  return (
    <Container>
      <PokemonImage
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
        className="pokemon-image"
      />
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
    </Container>
  );
};

export default PokemonDetails;

{
  /* <Container className={pokemons.types && pokemons.types[0].type.name}>
<Top>
  <First>
    <NavLink exact to="/home">
      <ArrowBackIosIcon fontSize="large" />
    </NavLink>
    <div>
      {" "}
      <Button onClick={clickHeart}>
        <Favorite>{heart}</Favorite>
      </Button>
    </div>
  </First>
  <Second>
    <Name>
      <H1>{pokemons.name}</H1>
      <Type>
        {pokemons.types &&
          pokemons.types.map((type, idx) => {
            return (
              <Text
                key={idx}
                className={type.type.name}
                id={type.type.name}
              >
                {type.type.name}
              </Text>
            );
          })}
      </Type>
    </Name>
    <Id>#{pokemons.id}</Id>
  </Second>

  <Img src={`../images/pokedex/${pokemons.id}.png`} />
</Top>
<Bottom>
  <B1>
    <H2>Status</H2>
  </B1>

  {pokemons.stats &&
    pokemons.stats.map((stat, idx) => {
      return (
        <ProgressBar
          key={idx}
          title={stat.stat.name}
          width={stat.base_stat}
          text={stat.base_stat}
        />
      );
    })}
</Bottom>
</Container>
</div>
);
} */
}
