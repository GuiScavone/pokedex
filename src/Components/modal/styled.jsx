import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 868px) {
    width: 80%; /* Alterado para 80% para se adaptar a telas menores */
    height: 60%; /* Alterado para 60% para se adaptar a telas menores */
    padding: 10px; /* Aumentado o espaço interno em telas menores */
  }

  @media (min-width: 899px) and (max-width: 2000px) {
    width: 40%; /* Alterado para 40% para se adaptar a telas médias */
    height: 50%; /* Alterado para 50% para se adaptar a telas médias */
    padding: 10px; /* Aumentado o espaço interno em telas médias */
    margin-left: 30%; /* Ajustado o espaçamento à esquerda em telas médias */
  }
`;

export const ModalCard = styled.div`
  position: fixed;
  width: 50%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  color: black;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;

  cursor: pointer;
`;

export const ModalCloseButton = styled.div`
  font-size: 24px;
  padding: 8px;
`;

export const Img = styled.img`
  width: 75%;
  margin: 0 auto;
  @media (max-width: 868px) {
    width: 100%;
    margin-left: 3%;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    width: 37%;
    margin-left: 23%;
  }
`;