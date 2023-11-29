import styled from "styled-components";
import backverde from "../../assets/backgroundVerde.png";

export const Gen1Container = styled.div`
  background-image: url(${backverde});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  margin-top: 20px;
`;

export const HeaderGen1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

export const BackHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px 50px 50px;

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover p {
      opacity: 1; 
    }
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  p {
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 50px 50px 50px;

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover p {
      opacity: 1;
    }
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  p {
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
