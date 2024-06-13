import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import MainAbout from "./Pages/MainAbout/MainAbout.jsx";
// -------------main home--------
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Fact from "./Components/fact/Fact.jsx";
import PortfolioSilder from "./Components/Portfolio Slider/PortfolioSilder";
import Services from "./Components/services/Services.jsx";
import Award from "./Components/Award/Award.jsx";
import Vediopart from "./Components/VedioPart/Vediopart";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/mainAbout",
    element: (
      <>
        <Navbar />
        <MainAbout />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <div className="Homemian">
          <Navbar />
          <Home />
          <Fact />
          <Services />
          {/* <PortfolioSilder /> */}
          <Award />
          <Vediopart />
          <Blog />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path : "/Services"
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
