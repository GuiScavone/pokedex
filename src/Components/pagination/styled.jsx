import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-top: 20px;
  color: white;
`;

export const ArrowButton = styled.button`
  height: 100%;
  width: 35px;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #fff;
  font-weight: bold;
  background-color: #7e8082;
  transition: 0.1s;


  &:active {
    transform: scale(0.9);
    border: none;
  }

  &:focus {
    font-weight: bold;
  }
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
      color: white;
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