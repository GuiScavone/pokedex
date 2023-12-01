import React from "react";
import Home from "./pages/home";
import AllRoutes from "./utils/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BodyApp } from "./appstyled";

const App = () => {
  return (
    <BodyApp>
      <Router>
        <AllRoutes />
      </Router>
    </BodyApp>
  );
};

export default App;
