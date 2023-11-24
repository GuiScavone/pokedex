// import React, { useEffect } from "react";
// import {
//   Card,
//   Content,
//   Price,
//   Description,
//   Title,
//   Button,
//   GridContainer,
//   PokeImg,
// } from "./styled";
// import Modal from "../modal";
// import { useState } from "react";
// import axios from "axios";
// import { Pagination } from "react-bootstrap";

// const PokemonCard = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [pokeinfo, setPokeInfo] = useState([]);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [imagePokemon, setImagePokemon] = useState([]);

//   useEffect(() => {
//     getPokemons();
//   }, []);

//   const getPokemons = () => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon?limit=151")
//       .then((res) => {
//         res.data.results.forEach((pokemon) => {
//           PokemonType(pokemon.name);
//           PokemonImg(pokemon.name);
//         });
//         // console.log(res.data.results);
//       })
//       .catch((err) => err);
//   };

//   const PokemonType = (PokeType) => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${PokeType}`).then((res) => {
//       setPokeInfo((prevPokeinfo) => [...prevPokeinfo, res.data]);
//     });
//   };
//   //   console.log(pokeinfo);

//   const PokemonImg = async (pokemonID) => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then((res) => {
//       setImagePokemon((prevPokemonID) => [...prevPokemonID, res.data]);
//     });
//   };

//   return (
//     <GridContainer>
//       {pokeinfo ? (
//         pokeinfo.map((pokeinfo, index) => (
//           <Card key={index}>
//             <Content>
//               {imagePokemon &&
//                 imagePokemon.map((pokemonImg, index) => (
//                   <PokeImg key={index}
//                   src={imagePokemon.find(pokemonImg => pokemonImg.data.name === pokeinfo.name).data.sprites.front_default}
//                   ></PokeImg>
//                 ))}

//               <Title>{pokeinfo.name}</Title>

//               <Description>
//                 {pokeinfo.types && pokeinfo.types.length > 0 ? (
//                   pokeinfo.types.map((type, typeIndex) => (
//                     <span key={typeIndex}>{type.type.name}</span>
//                   ))
//                 ) : (
//                   <span>No types available</span>
//                 )}
//               </Description>
//             </Content>
//             <Button
//               onClick={() => {
//                 setOpenModal(true);
//                 setSelectedPokemon(pokeinfo);
//               }}
//             >
//               More Info
//             </Button>
//           </Card>
//         ))
//       ) : (
//         <p>vazio</p>
//       )}
//       <Modal
//         isOpen={openModal}
//         pokeinfo={selectedPokemon}
//         setModalOpen={() => setOpenModal(!openModal)}
//       >
//         Conteudo do Modal
//       </Modal>
//     </GridContainer>
//   );
// };

// export default PokemonCard;




import React, { useEffect, useState } from "react";
import {
  Card,
  Content,
  Price,
  Description,
  Title,
  Button,
  GridContainer,
  PokeImg,
  Typebox,
} from "./styled";
import Modal from "../modal";
import axios from "axios";

const PokemonCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pokeinfo, setPokeInfo] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const pokemonResults = response.data.results;

      const pokemonDetails = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const detailsResponse = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const details = detailsResponse.data;

          return {
            name: details.name,
            types: details.types.map((type) => type.type.name),
            image: details.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokeInfo(pokemonDetails);
    } catch (error) {
      console.error("Error fetching Pokemon data", error);
    }
  };

  return (
    <GridContainer>
      {pokeinfo.length > 0 ? (
        pokeinfo.map((pokemon, index) => (
          <Card key={index}>
            <Content>
              <PokeImg src={pokemon.image} alt={pokemon.name} />

              <Title>{pokemon.name}</Title>

              <Description>
                {pokemon.types && pokemon.types.length > 0 ? (
                  pokemon.types.map((type, typeIndex) => (
                    <Typebox key={typeIndex} type={type}>
                        {type}
                        </Typebox>
                  ))
                ) : (
                  <span>No types available</span>
                )}
              </Description>
            </Content>
            <Button
              onClick={() => {
                setOpenModal(true);
                setSelectedPokemon(pokemon);
              }}
            >
              More Info
            </Button>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)} selectedPokemon={selectedPokemon}>
        Conteudo do Modal
      </Modal>
    </GridContainer>
  );
};

export default PokemonCard;
