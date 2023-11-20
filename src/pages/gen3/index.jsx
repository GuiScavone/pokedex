import React from "react";
import { Link } from "react-router-dom";

const Gen3 = () => {
  return (
    <>
      <h1>Gen3 </h1>
      <Link to="/home">
        <button>Voltar para a Home</button>
      </Link>
    </>
  );
};

export default Gen3;
