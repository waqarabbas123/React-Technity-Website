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
import Vedioedit from "./Pages/Mainportfolio/VedioEditing/Vedioedit.jsx";
import OurMission from "./Pages/OurMission/OurMission.jsx";
import TeamDeatail from "./Pages/MainTeam/TeamDetails/TeamDetail.jsx";
import Ai from "./Pages/Mainportfolio/Ai/Ai.jsx";
import AppDevelopment from "./Pages/Mainportfolio/App development/AppDevelopment.jsx";
import Whatsapp from "./Components/Whatsapp/Whatsapp.jsx";
import Scroll from "./Components/Scroll/Scroll.jsx";

const router = createBrowserRouter([
  //-------------section for the main about page---------
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <MainAbout />
        <Whatsapp />
        <Scroll />
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
          <PortfolioSilder />
          <Award />
          <Vediopart />
          <Blog />
          <Footer />
          <Whatsapp />
          <Scroll />
        </div>
      </>
    ),
  },
  //---------section for services------
  {
    path: "/services",
    element: (
      <>
        <Navbar />
        <MainServices />
        <Footer />
        <Whatsapp />
        <Scroll />
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
        <Whatsapp />
        <Scroll />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <MainContact />
        <Map />
        <Footer />
        <Whatsapp />
        <Scroll />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <MainTeam />
        <Footer />
        <Whatsapp />
        <Scroll />
      </>
    ),
  },
  {
    path: "/webdevelopment",
    element: (
      <>
        <Navbar />
        <WebDevelopment />
        <Footer />
        <Whatsapp />
        <Scroll />
      </>
    ),
  },
  {
    path: "/appdevelopment",
    element: (
      <>
        <Navbar />
        <AppDevelopment />
        <Footer />
        <Whatsapp />
        <Scroll />
      </>
    ),
  },
  {
    path: "/vedioediting",
    element: (
      <div className="VedioEditPage">
        <Navbar />
        <Vedioedit />
        <Footer />
        <Whatsapp />
        <Scroll />
      </div>
    ),
  },
  {
    path: "/ai",
    element: (
      <div className="aiPage">
        <Navbar />
        <Ai />
        <Footer />
        <Whatsapp />
        <Scroll />
      </div>
    ),
  },
  {
    path: "/ourmission",
    element: (
      <div className="OurMissionPage">
        <Navbar />
        <OurMission />
        <Footer />
        <Whatsapp />
        <Scroll />
      </div>
    ),
  },
  {
    path: "/teamdetail",
    element: (
      <div className="teamdetail">
        <Navbar />
        <TeamDeatail />
        <Footer />
        <Scroll />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
