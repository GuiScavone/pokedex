import React from "react";
import { ProgressBarStyled, H3 } from "./styled";

function ProgressBar({ title, width, text }) {
  const num = width + "%";
  return (
    <ProgressBarStyled>
      <H3>{title}</H3>
      <div>
        <span style={{ width: num }}></span>
      </div>
      <H3>{text}</H3>
    </ProgressBarStyled>
  );
}

export default ProgressBar;
