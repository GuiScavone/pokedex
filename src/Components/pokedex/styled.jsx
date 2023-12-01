import styled from "styled-components";

export const PokeGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
  gap: 25px;
  padding: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna para telas menores */
    align-items: center; /* Centraliza os itens na vertical */
    text-align: center; /* Centraliza os itens na horizontal */
  }
`;

