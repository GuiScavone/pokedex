import styled from "styled-components";
import typecolors from "../typecolors";
import poketr from "../../assets/pokeballtrans.png";

export const PokemonCardContainer = styled.div`
  padding-top: 50px;
  border-radius: 8px;
  width: 250px;
  height: 350px;
  align-items: flex-end;
`;

export const PokemonImage = styled.img`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: -5rem;
  left: 50%;
  width: 75%;
  transform: translateX(-50%);
  filter: saturate(1.2);
  img {
    z-index: 100000;
  }
`;

export const PokemonImageContainer = styled.div`
  /* opacity: 75%; */
  text-align: center;
  padding: 16px;
  position: relative;
`;

export const CardBody = styled.div`
  border-radius: 30px;
  padding: 10px;
  color: white;
  height: 300px;
  background: linear-gradient(
    to top,
    ${(props) => props.gradientColors[0]} 0%,
    ${(props) => props.gradientColors[1]} 100%
  );
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const PokemonName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  text-transform: capitalize;
`;

export const PokemonId = styled.div`
  font-size: 1rem;
  color: #ffffff;
`;

export const CardBottom = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PokemonType = styled.div`
  display: flex;
  justify-content: center;
`;

export const TypeImage = styled.div`
display: flex;
justify-items: center;
  background-image: url(${(props) => props.image});
  /* width: 30px; */
  height: 12px;
  margin-right: 4px;
  
`;

export const PokemonTypeText = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => typecolors[props.type]};
  border-radius: 30px;
  padding: 4px 15px;
  margin: 8px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  `;

export const CardAbout = styled.div`
  border-radius: 30px;
  padding: 4px 8px;
  padding-bottom: 15px;
  margin: 4px;
  color: #fff;
  align-content: center;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 10px;
`;

export const Label = styled.span`
 display: flex;
 font-size: 1rem;
  color: #ffffff;
  margin-right: 5px;
  font-weight: bold;
`;

export const ValueCard = styled.div`
  padding-top: 10px;



`;
export const ValueBox = styled.span`
  background-color: #ffffff;
  color: #959595;
  padding: 5px;
  border-radius: 20px;
  font-size: small;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: #d6dad6;
  color: #7e7a7a;
  font-weight: Bold;
  margin: auto;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;

  &:hover {
    background-color: #d6dad6;
    box-shadow: 0 0 20px #7e7a7a;
    transform: scale(1.1);
  }

  &:active {
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }
`;
