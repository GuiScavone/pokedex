import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Gen1 from "../pages/gen1";
import Gen2 from "../pages/gen2";
import Gen3 from "../pages/gen3";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
