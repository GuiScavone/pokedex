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
} from "./styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
      <Link to="/home">
        <Logo src={logo} alt="Logo Pokemon" />
      </Link>
        <MainImage src={ash} alt="AshCation" />
        <div>
        <ButtonContainer>
          <Link to="/gen1">
            <ButtonPage>Gen 1</ButtonPage>
          </Link>
          <Link to="/gen2">
            <ButtonPage>Gen 2</ButtonPage>
          </Link>
          <Link to="/gen3">
            <ButtonPage>Gen 3</ButtonPage>
          </Link>
        </ButtonContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
