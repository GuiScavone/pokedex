import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Logo } from "./styled";
import Searchbar from "../../Components/searchbar";
import { getPokemonData, getPokemons, searchPokemon } from "../../utils/api";
import Pokedex from "../../Components/pokedex";
import { PokemonGeneration } from "../../utils/generation";


const Gen2 = () => {
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (pokemonName) => {
    const result = await searchPokemon(pokemonName);
    setSearchedPokemon(result);
  };

  const itensPerPage = 15;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(PokemonGeneration.Second, itensPerPage, itensPerPage * page);
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
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result || (result && result.id <= 152 && result.id >= 251)) {
    setNotFound(true)
  } else {
    setPokemons([result])
    setPage(0)
    setTotalPages(1)
  }
  setLoading(false)
}


  return (
    <>
      <header>
        <Link to="/home">
          <Logo src={logo} alt="Logo Pokemon" />
        </Link>
      </header>
      <Searchbar onSearch={onSerchHandler} />
      {notFound ? (
        <div className="not-found-text">meteu essa?!</div>
          ) : (
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalpages}
      />)}
      <Link to="/home">
        <button>Voltar para a Home</button>
      </Link>
    </>
  );
};

export default Gen2;
