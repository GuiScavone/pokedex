import styled from "styled-components";
import backblack from "../../assets/backgroundblack.png";

export const Gen1Container = styled.div`
  background-image: url(${backblack});
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

export const SadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  
  height: 100vh;
  margin-top: 50px; 
`;

export const SadText = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

export const SadImg = styled.img`
  width: 250px;
  height: auto;
`;