// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   Content,
//   Description,
//   Title,
//   Button,
//   GridContainer,
//   PokeImg,
//   Typebox,
// } from "./styled";
// import Modal from "../modal";
// import axios from "axios";

// const PokemonCard = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [pokeinfo, setPokeInfo] = useState([]);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);

//   useEffect(() => {
//     getPokemons();
//   }, []);

//   const getPokemons = async () => {
//     try {
//       const response = await axios.get(
//         "https://pokeapi.co/api/v2/pokemon?limit=151"
//       );
//       const pokemonResults = response.data.results;

//       const pokemonDetails = await Promise.all(
//         pokemonResults.map(async (pokemon) => {
//           const detailsResponse = await axios.get(
//             `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//           );
//           const details = detailsResponse.data;

//           return {
//             name: details.name,
//             types: details.types.map((type) => type.type.name),
//             image: details.sprites.front_default, //details.sprites.other["official-artwork"].front_default
//           };
//         })
//       );

//       setPokeInfo(pokemonDetails);
//     } catch (error) {
//       console.error("Error fetching Pokemon data", error);
//     }
//   };

//   return (
//     <GridContainer>
//       {pokeinfo.length > 0 ? (
//         pokeinfo.map((pokemon, index) => (
//           <Card key={index}>
//             <Content>
//               <PokeImg src={pokemon.image} alt={pokemon.name} />

//               <Title>{pokemon.name}</Title>

//               <Description>
//                 {pokemon.types && pokemon.types.length > 0 ? (
//                   pokemon.types.map((type, typeIndex) => (
//                     <Typebox key={typeIndex} type={type}>
//                       {type}
//                     </Typebox>
//                   ))
//                 ) : (
//                   <span>No types available</span>
//                 )}
//               </Description>
//             </Content>
//             <Button
//               onClick={() => {
//                 setOpenModal(true);
//                 setSelectedPokemon(pokemon);
//               }}
//             >
//               More Info
//             </Button>
//           </Card>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//       <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)}>
//         Conteudo do Modal
//       </Modal>
//     </GridContainer>
//   );
// };

// export default PokemonCard;
