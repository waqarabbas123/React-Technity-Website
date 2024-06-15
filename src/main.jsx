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
import Award from "./Components/Award/Award.jsx"; //award section
import Vediopart from "./Components/VedioPart/Vediopart"; //vedio section
import Blog from "./Components/Blog/Blog"; //blog section
import Footer from "./Components/Footer/Footer";//footer
import MainServices from "./Pages/MainServices/MainServices.jsx"; // services
import ServiceDetail from "./Pages/MainServices/Servicesdetail/ServiceDetail.jsx"; //services detail

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  //-------------section for the main about page---------
  {
    path: "/mainAbout",
    element: (
      <>
        <Navbar />
        <MainAbout />
      </>
    ),
  },
  // ----------section for the main home page
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
  //---------section for services------
  {
    path: "/Services",
    element: (
      <>
        <Navbar />
        <MainServices />
        <Footer />
      </>
    ),
  },
  {
    path: "/servicedetail",
    element: (
      <>
        <Navbar />
        <ServiceDetail/>
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
