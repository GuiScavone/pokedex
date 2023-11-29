import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  // Centraliza horizontalmente
  margin-top: 20px;
`;

export const ArrowButton = styled.button`
  height: 100%;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #fff;
  background-color: #7e8082; // Cor de fundo, ajuste conforme necessário
  transition: 0.1s;

  &:active {
    transform: scale(0.9);
    border: none;
  }

  &:focus {
    font-weight: bold;
  }
`;