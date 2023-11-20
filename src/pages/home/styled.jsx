import styled from "styled-components";
import image from "../../assets/BackGroundHome.png";

export const HomeContainer = styled.div`
background-image: url(${image});
background-size: auto auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Logo = styled.img`
  max-width: 250px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.img`
align-items: center;
  width: 159px;
  height: 258px;
  max-width: 100%;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const ButtonPage = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #2980b9;
  }
`;
