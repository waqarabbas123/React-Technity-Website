import React, { useState } from "react";
import "./Web.css";
import AliImg from "/background img.jfif"; //AliImg
// ------------webflow imgs
import shokats from "/webflow img/Capture-1.jpeg";
import techsgiving from "/webflow img/Capture-2.jpg";
// ----------------custom images
import allunit from "/webflow img/allunit.png";

import WordPress from "../../../Components/WordPress/WordPress";
import ProjectItem from "../../../Components/ProjectItem/ProjectItem";
import Mangento from "../../../Components/Mangento/Mangento";

// ----------for all the projects All---------------
const Component1 = () => {
  return (
    <>
      <div className="all flex justify-center flex-wrap items-center gap-[30px]">
        {/* ----------------------------megento----------------------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento "
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* --------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento "
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ----------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ---------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -----------------------word press projects  */}
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Word-press"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={AliImg}
        ></ProjectItem>
        {/* -------------------------------web flow-------------- */}
        {/* ---------------- */}
        <ProjectItem
          websiteName="shokats-dappe-site"
          projectBy="Web-Flow"
          projectlink="https://shokats-dapper-site.webflow.io/"
          backgroundImage={shokats}
        ></ProjectItem>
        {/* ---------------- */}
        <ProjectItem
          websiteName="techsgiving-site"
          projectBy="Web-flow"
          projectlink="https://techsgiving-59251c.webflow.io/"
          backgroundImage={techsgiving}
        ></ProjectItem>
        {/* -------------------------custom---------------- */}
        <ProjectItem
          websiteName="allunitconverter.com"
          projectBy="Custom"
          projectlink="https://allunitconverter.com/"
          backgroundImage={allunit}
        ></ProjectItem>
      </div>
    </>
  );
};
// ----------------------------------------either projects--------------------
// ------------------manxjento-------------
const Component2 = () => {
  return (
    <div>
      <Mangento />
    </div>
  );
};
//-------------word-press----------
const Wordpress = () => {
  return (
    <div>
      <WordPress />
    </div>
  );
};
// -------------webflow--------
const Component4 = () => {
  return (
    <div className="flex items-center justify-center gap-[30px]">
      <ProjectItem
        websiteName="shokats-dappe-site"
        projectBy="Web-Flow"
        projectlink="https://shokats-dapper-site.webflow.io/"
        backgroundImage={shokats}
      ></ProjectItem>
      {/* ---------------- */}
      <ProjectItem
        websiteName="techsgiving-site"
        projectBy="Web-flow"
        projectlink="https://techsgiving-59251c.webflow.io/"
        backgroundImage={techsgiving}
      ></ProjectItem>
    </div>
  );
};

// -------------custom--------
const Component6 = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-[30px]">
        <ProjectItem
          websiteName="allunitconverter.com"
          projectBy="Custom"
          projectlink="https://allunitconverter.com/"
          backgroundImage={allunit}
        ></ProjectItem>
      </div>
    </>
  );
};


function WebDevelopment() {
  const [currentComponent, setCurrentComponent] = useState(<Component1 />);
  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <>
      <div className="MainWebsection">
        <div className="MainWebsectionhome">
          <h2>Portfolio</h2>
          <p>
            <span className="fristchild">Web </span> | <span>Development</span>
          </p>
        </div>
        {/* -------------- */}
        <div className="webmain flex justify-between items-center px-24 pt-28">
          <div className="webcontent">
            <h3 className="text-lg text-slate-50">Our Portfolio</h3>
            <h2 className="text-3xl font-semibold tracking-normal text-orange-700 font-serif">
              Some Recent Projects
            </h2>
          </div>
          <div className="weblink">
            <ul className="flex items-center justify-center border-solid border-orange-700 border-b-2 pb-2 px-1">
              <li className="pr-4 text-xl ">
                <a
                  className="menu-link active:text-orange-700"
                  onClick={() => handleClick(<Component1 />)}
                >
                  All
                </a>
              </li>
              <li className="px-4  text-xl">
                <a
                  className="menu-link"
                  onClick={() => handleClick(<Component2 />)}
                >
                  Mangento
                </a>
              </li>
              <li className="px-4 text-xl ">
                <a
                  className="menu-link"
                  onClick={() => handleClick(<Wordpress />)}
                >
                  {" "}
                  WordPress
                </a>
              </li>
              <li className="px-4 text-xl">
                <a
                  className="menu-link"
                  onClick={() => handleClick(<Component4 />)}
                >
                  Webflow
                </a>
              </li>
              <li className="pl-4 text-xl">
                <a
                  className="menu-link"
                  onClick={() => handleClick(<Component6 />)}
                >
                  Custom
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* --------------------- */}
        <div className="pt-5">{currentComponent}</div>
      </div>
    </>
  );
}

export default WebDevelopment;
