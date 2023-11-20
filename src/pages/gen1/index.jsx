import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Logo } from "./styled";
import PokemonCard from "../../Components/pokemoncard";

const Gen1 = () => {
  return (
    <>
      <header>
        <Link to="/home">
          <Logo src={logo} alt="Logo Pokemon" />
        </Link>
      </header>
      <PokemonCard />
      <Link to="/home">
        <button>Voltar para a Home</button>
      </Link>
    </>
  );
};

export default Gen1;
