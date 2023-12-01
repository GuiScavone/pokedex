import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Logo,
  Gen1Container,
  HeaderGen1,
  SadContainer,
  SadImg,
  SadText
} from "./styled";
import Searchbar from "../../Components/searchbar";
import { getPokemonData, getPokemons, searchPokemon } from "../../utils/api";
import Pokedex from "../../Components/pokedex";
import { PokemonGeneration } from "../../utils/generation";
import sad from "../../assets/sad.gif";

const Gen2 = (props) => {
  const { totalPages } = props;
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const handleSearch = async (pokemonName) => {
    const result = await searchPokemon(pokemonName);
    setSearchedPokemon(result);
  };

  const itensPerPage = 16;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(
        PokemonGeneration.Second,
        itensPerPage,
        itensPerPage * page
      );
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(100 / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSerchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };
  return (
    <Gen1Container>
      <HeaderGen1>
        <Link to="/">
          <Logo src={logo} alt="Logo Pokemon" />
        </Link>
      </HeaderGen1>
      <Searchbar onSearch={onSerchHandler} />
      {notFound ? (
         <SadContainer>
            <SadText>This pokemon doesn't exist!! Try Again</SadText>
         <SadImg src={sad} alt="Pikachu Sad" />
       
       </SadContainer>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalpages}
        />
      )}
    </Gen1Container>
  );
};

export default Gen2;
