import React, { useContext } from "react";
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
  } from "./styled";
import Modal from "../modal";

const Pokemon = (props) => {
  const { pokemon } = props;

//   return (
//     <div className="pokemon-card">
//       <div className="pokemon-image-container">
//         <img
//           alt={pokemon.name}
//           src={pokemon.sprites.front_default}
//           className="pokemon-image"
//         />
//       </div>
//       <div className="card-body">
//         <div className="card-top">
//           <h3> {pokemon.name}</h3>
//           <div>#{pokemon.id}</div>
//         </div>
//         <div className="card-bottom">
//           <div className="pokemon-type">
//             {pokemon.types.map((type, index) => {
//               return (
//                 <div key={index} className="pokemon-type-text">
//                   {type.type.name}
//                 </div>
//               );
//             })}
//           </div>
//           <button className="pokemon-heart-btn" onClick={onHeartClick}>
//             {heart}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

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
            {pokemon.types.map((type, index) => (
              <PokemonTypeText key={index}>{type.type.name}</PokemonTypeText>
            ))}
          </PokemonType>
          <Button
              onClick={() => {
              }}
            >
              More Info
            </Button>
        </CardBottom>
      </CardBody>
    </PokemonCardContainer>
  );
};

export default Pokemon;
