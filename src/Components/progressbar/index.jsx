// ProgressBar.js
import React from "react";
import { ProgressBarStyled, H3, AnimatedProgressBar } from "./styled";

function ProgressBar({ title, width, text }) {
  const num = width + "%";

  return (
    <ProgressBarStyled>
      <H3>{title}</H3>
      <div className="progress">
        <AnimatedProgressBar style={{ width: num }} />
      </div>
      <H3 className="progress-bar">{text}</H3>
    </ProgressBarStyled>
  );
}

export default ProgressBar;
