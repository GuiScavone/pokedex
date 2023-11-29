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
} from "./styled";
import { Link } from "react-router-dom";
import imgGen1 from "../../assets/gen1plus.png";
import imgGen2 from "../../assets/gen2plus.png";
import imgGen3 from "../../assets/gen3plus.png";

const Home = () => {
  return (
    <HomeContainer>
      <Link to="/home">
        <Logo src={logo} alt="Logo Pokemon" />
      </Link>
      <MainImage src={ash} alt="AshCation" />
      <ButtonContainer>
        <div>
          <div>
          <ImgGen src={imgGen1} alt="AshCation" />
          </div>
          <Link to="/gen1">
            <ButtonPage>Generation 1</ButtonPage>
          </Link>
        </div>
        <div>
          <div>
          <ImgGen src={imgGen2} alt="AshCation" />
          </div>
          <Link to="/gen2">
            <ButtonPage>Generation 2</ButtonPage>
          </Link>
        </div>
        <div>
          <div>
          <ImgGen src={imgGen3} alt="AshCation" />
          </div>
          <Link to="/gen3">
            <ButtonPage>Generation 3</ButtonPage>
          </Link>
        </div>
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;
