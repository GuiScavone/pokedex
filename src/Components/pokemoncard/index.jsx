import React, { useEffect } from "react";
import {
  Card,
  Content,
  Price,
  Description,
  Title,
  Button,
  GridContainer,
  PokeImg,
} from "./styled";
import Modal from "../modal";
import { useState } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";

const PokemonCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pokeinfo, setPokeInfo] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [imagePokemon, setImagePokemon] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        res.data.results.forEach((pokemon) => {
          PokemonType(pokemon.name);
        });
        // console.log(res.data.results);
      })
      .catch((err) => err);
  };

  const PokemonType = (PokeType) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${PokeType}`).then((res) => {
      setPokeInfo((prevPokeinfo) => [...prevPokeinfo, res.data]);
    });
  };
  //   console.log(pokeinfo);

  

  return (
    <GridContainer>
      {pokeinfo ? (
        pokeinfo.map((pokeinfo, index) => (
          <Card key={index}>
            <Content>
              {/* <PokeImg src={pokemon.name} alt="AshCation" /> */}

              <Title>{pokeinfo.name}</Title>

              <Description>
                {pokeinfo.types && pokeinfo.types.length > 0 ? (
                  pokeinfo.types.map((type, typeIndex) => (
                    <span key={typeIndex}>{type.type.name}</span>
                  ))
                ) : (
                  <span>No types available</span>
                )}
              </Description>
            </Content>
            <Button
              onClick={() => {
                setOpenModal(true);
                setSelectedPokemon(pokeinfo);
              }}
            >
              More Info
            </Button>
          </Card>
        ))
      ) : (
        <p>vazio</p>
      )}
      <Modal
        isOpen={openModal}
        pokeinfo={selectedPokemon}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        Conteudo do Modal
      </Modal>
    </GridContainer>
  );
};

export default PokemonCard;
