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

`;

export const MainImage = styled.img`

  width: 159px;
  height: 258px;
  max-width: 100%;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  display: flex;
  gap: 25px;

`;

export const ButtonPage = styled.button`
 justify-content: space-around;
 margin-left: 35px;
  margin-top: 15px;
  padding: 12.5px 30px;
  background-color: #d6dad6;
  color: #434141;
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
 
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

export const ImgGen = styled.img`
justify-content: space-around;
  width: 210px;
  height: 210px;
  max-width: 100%;
  margin-top: 20px;
`;

