import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Logo,
  Gen1Container,
  BackHome,
  HeaderGen1,
  ScrollToTopButton,
} from "./styled";
import Searchbar from "../../Components/searchbar";
import { getPokemonData, getPokemons, searchPokemon } from "../../utils/api";
import Pokedex from "../../Components/pokedex";
import { PokemonGeneration } from "../../utils/generation";
import sad from "../../assets/sad.gif";
import backball from "../../assets/pokeball.png";

const Gen1 = () => {
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona uma animação suave
    });
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
        PokemonGeneration.First,
        itensPerPage,
        itensPerPage * page
      );
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(151 / itensPerPage));
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
    if (!result || (result && result.id <= 1 && result.id >= 151)) {
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
        <Link to="/home">
          <Logo src={logo} alt="Logo Pokemon" />
        </Link>
      </HeaderGen1>
      <Searchbar onSearch={onSerchHandler} />
      {notFound ? (
        <div>
          <img src={sad} alt="pikachu sad" />
        </div>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalpages}
        />
      )}
      <BackHome>
        <Link to="/home">
          <button>
            <img src={backball} alt="BackHome" />
            <p>Back Home</p>
          </button>
        </Link>
      
      <ScrollToTopButton onClick={scrollToTop}>
        <button>
          <img src={backball} alt="Back Top Page" />
          <p>Back Top Page</p>
        </button>
      </ScrollToTopButton>
      </BackHome>
    </Gen1Container>
  );
};

export default Gen1;
