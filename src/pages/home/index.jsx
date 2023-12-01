// src/Pages/home/index.jsx
import React from "react";
import logo from "../../assets/logo.png";
import ash from "../../assets/ash.png";
import {
  HomeContainer,
  Logo,
  MainImage,
  ButtonContainer,
  ButtonPage,
  ImgGen,
  BoxColor1,
  BoxColor2,
  BoxColor3,
} from "./styled";
import { Link } from "react-router-dom";
import imgGen1 from "../../assets/gen1plus.png";
import imgGen2 from "../../assets/gen2plus.png";
import imgGen3 from "../../assets/gen3plus.png";

const Home = () => {
  return (
    <HomeContainer>
      <Logo src={logo} alt="Logo Pokemon" />
      <MainImage src={ash} alt="AshCation" />
      <ButtonContainer>
        <BoxColor1>
          <div>
            <ImgGen src={imgGen1} alt="Pokemons generarion 1" />
          </div>
          <Link to="/gen1">
            <ButtonPage>Generation 1</ButtonPage>
          </Link>
        </BoxColor1>

        <BoxColor2>
          <div>
            <ImgGen src={imgGen2} alt="Pokemons generarion 2" />
          </div>
          <Link to="/gen2">
            <ButtonPage>Generation 2</ButtonPage>
          </Link>
        </BoxColor2>

        <BoxColor3>
          <div>
            <ImgGen src={imgGen3} alt="Pokemons generarion 2" />
          </div>
          <Link to="/gen3">
            <ButtonPage>Generation 3</ButtonPage>
          </Link>
        </BoxColor3>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
