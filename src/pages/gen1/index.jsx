import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Logo } from "./styled";
import PokemonCard from "../../Components/pokemoncard";
import Searchbar from "../../Components/searchbar";
import { searchPokemon } from "../../utils/api";

const Gen1 = () => {
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  const handleSearch = async (pokemonName) => {
    const result = await searchPokemon(pokemonName);
    setSearchedPokemon(result);
  };

  return (
    <>
      <header>
        <Link to="/home">
          <Logo src={logo} alt="Logo Pokemon" />
        </Link>
      </header>
      <Searchbar onSearch={handleSearch} />

      <PokemonCard />

      <Link to="/home">
        <button>Voltar para a Home</button>
      </Link>
    </>
  );
};

export default Gen1;
