import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  @media (max-width: 801px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PokemonImageContainer = styled.div`
  text-align: center;
`;

export const PokemonInfoContainer = styled.div`
  width: 400px;
  height: 400px;

  @media (max-width: 801px) {
    width: 80%; /* Ajuste a largura máxima conforme necessário */
    max-width: 400px; /* Adicionado um limite máximo de largura */
    padding: 5px; /* Adicionado espaçamento interno */
  }
`;

export const PokemonImage = styled.img`
  height: 250px;
  width: 250px;

  @media (max-width: 801px) {
    max-height: 250px; /* Adicionado um limite máximo de altura */
    max-width: 100%; /* Adicionado um limite máximo de largura */
  }
`;
