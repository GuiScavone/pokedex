// styled.js
import styled, { keyframes } from "styled-components";

export const ProgressBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  .progress {
    position: relative;
    width: 100%;
    border-color: #040714;
    border-style: solid;
    border-width: 3px;
    background-color: #764343;

    @media (max-width: 768px) {
      width: 260px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

export const H3 = styled.h3`
  color: #040714;
  font-size: 18px;
  letter-spacing: 0.2px;
  line-height: 1.5;
  padding: 2px;
  position: relative;
  opacity: 1;
  margin: 3px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const progressBarAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${(props) => props.width};
  }
`;

export const AnimatedProgressBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  max-width: 100%;
  height: 0.6rem;
  background-color: #e13b3b;
  border-color: white;
  animation: ${progressBarAnimation} 1s ease-in-out;
`;
