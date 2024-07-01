import React from "react";
import ReactDOM from "react-dom/client";
//import bootsrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS (includes Popper.js)
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
import Footer from "./Components/Footer/Footer"; //footer
import MainServices from "./Pages/MainServices/MainServices.jsx"; // services
import ServiceDetail from "./Pages/MainServices/Servicesdetail/ServiceDetail.jsx"; //services detail
import MainContact from "./Pages/MainContact/MainContact.jsx"; //main page contant page

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Map from "./Components/Map/Map.jsx";
import MainTeam from "./Pages/MainTeam/MainTeam.jsx";
import WebDevelopment from "./Pages/Mainportfolio/WebDevelopment/WebDevelopment.jsx";

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
        <div className="nav-home ">
          <Navbar />
          <Home />
          <Fact />
        </div>
        <div className="Homemian">
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
        <ServiceDetail />
        <div className="footer">
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/MainContact",
    element: (
      <>
        <Navbar />
        <MainContact />
        <Map />
        <Footer />
      </>
    ),
  },
  {
    path: "/Mainteam",
    element: (
      <>
        <Navbar />
        <MainTeam />
        <Footer />
      </>
    ),
  },
  {
    path: "/Webdevelopment",
    element: (
      <>
        <Navbar />
        <WebDevelopment />
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
