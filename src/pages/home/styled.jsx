import styled from "styled-components";
import image from "../../assets/BackGroundHome.png";
import backblack from "../../assets/backgroundblack.png";

export const BoxColor1 = styled.div`
  width: 213px;
  height: 350px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(120, 172, 148, 0.35) 26.04%,
    #90cfb2 56.25%
  );
  flex-shrink: 0;

  @media (max-width: 801px) {
    background: none;
  }
`;

export const BoxColor2 = styled.div`
  width: 213px;
  height: 350px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(127, 160, 195, 0.35) 26.04%,
    #7ea0c3 56.25%
  );

  @media (max-width: 801px) {
    background: none;
  }
`;

export const BoxColor3 = styled.div`
  width: 213px;
  height: 350px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(248, 139, 35, 0.35) 26.04%,
    #f88b22 56.25%
  );

  @media (max-width: 801px) {
    background: none;
  }
`;

export const HomeContainer = styled.div`
  background-image: url(${backblack});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 801px) {
    background-image: url(${backblack});
    padding-top: 0;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    background-image: url(${backblack});
    justify-content: flex-start;
    padding-top: 20px;
  }
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

  @media (max-width: 801px) {
    width: 100px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 120px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  display: flex;
  gap: 25px;
  max-width: 650px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  width: 210px;
  height: 210px;
  max-width: 100%;
  margin-top: 50px;

  @media (max-width: 801px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;
