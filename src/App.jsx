import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Fact from "./Components/fact/Fact";
import Services from "./Components/services/Services";
import Award from "./Components/Award/Award";
import PortfolioSilder from "./Components/Portfolio Slider/PortfolioSilder";
import Vediopart from "./Components/VedioPart/Vediopart";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className="main">
      {/* ----------home page--------- */}
      <div className="app">
        <Navbar />
        <Home />
      </div>
      <Fact />
      <Services />
      <PortfolioSilder />
      <Award />
      <Vediopart />
      <Blog />
    </div>
  );
}

export default App;
