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
    width: 80%; 
    height: 60%;
    padding: 10px;
  }

  @media (min-width: 899px) and (max-width: 2000px) {
    width: 40%; 
    height: 50%;
    padding: 10px; 
    margin-left: 30%;
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