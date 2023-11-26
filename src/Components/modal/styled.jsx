import styled from "styled-components";

export const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    left: 0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 1000;
`;

export const ModalCard = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 150px;
    background-color: #fff;
    border-radius: 10px;
    color: black;
`;

export const ModalFooter = styled.div `
    cursor: pointer;
`;

export const Img = styled.img`
  width: 37%;
  position: relative;
  display: row;
  left: 33%;
  @media (max-width: 868px) {
    width: 100%;
    left: 3%;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    width: 37%;
    position: relative;
    display: row;
    left: 23%;
  }
`;