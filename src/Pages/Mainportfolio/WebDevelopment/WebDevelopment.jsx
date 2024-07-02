import React, { useState } from "react";
import "./Web.css";
import AliImg from "/background img.jfif"; //AliImg
// ------------webflow imgs
import shokats from "/webflow img/Capture-1.jpeg";
import techsgiving from "/webflow img/Capture-2.jpg";
// ----------------custom images
import allunit from "/webflow img/allunit.png";
// --------------wordpress ----
import Dentalart from "/wordpress/dentalart.jpeg";
import richmenbs from "/wordpress/richmenbs.png";
import donikah from "/wordpress/donikah.png";
import kasten from "/wordpress/kasten.png";
import kim from "/wordpress/kim.png";
import kimgilllaw from "/wordpress/kim-gill-law.jpeg";
import integratedlanguages from "/wordpress/integratedlanguages.jpg";
import jollibeeuae from "/wordpress/jollibeeuae.jpg";
import uominiecani from "/wordpress/uominiecani.jpg";
import goodnews from "/wordpress/3goodnews.png";
import goldenspike from "/wordpress/goldenspike.jpg";
// ---------------------mangento---------
import iblack from "/mangento/iblack.png";
import ChinChin from "/mangento/chin-chin.png";
import genesis from "/mangento/genesis.png";
import tramag from "/mangento/tramag.png";
import odecla from "/mangento/odecla.png";
import xogadget from "/mangento/xogadget.jpg";
import blacktulip from "/mangento/blacktulip.jpg";
import cleverpokal from "/mangento/cleverpokal.jpg";
import omaze from "/mangento/omaze.jpg";
import emusasustainable from "/mangento/emusasustainable.jpg";
import viviannaus from "/mangento/viviannaus.jpg";
import pgsLtd from "/mangento/pgs-ltd.com.jpg";
import primeboucherie from "/mangento/primeboucherie.jpg";
import thewatchchoice from "/mangento/thewatchchoice.jpg";
import UntitledDesign from "/mangento/Untitled-design.png";
import fusionfirearms from "/mangento/fusionfirearms.png";
import toneartShop from "/mangento/toneart-shop.png";
import goodnaturevibe from "/mangento/goodnaturevibe.png";
import punkdimage from "/mangento/punkdimage.png";
import goblondieCom from "/mangento/goblondie.com.png";
import printonline from "/mangento/printonline.png";
import anotheramazing from "/mangento/anotheramazingproductusa.png";

import WordPress from "../../../Components/WordPress/WordPress";
import ProjectItem from "../../../Components/ProjectItem/ProjectItem";
import Mangento from "../../../Components/Mangento/Mangento";

// ----------for all the projects All---------------
const Component1 = () => {
  return (
    <>
      <h2 className="capitalize text-orange-600 text-2xl text-center py-3 pb-5">
        All Projects
      </h2>
      <div className="all flex justify-center flex-wrap items-center gap-[30px]">
        {/* ----------------------------megento----------------------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://www.omaze.com/pages/unavailable"
          backgroundImage={omaze}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="emusasustainable.com"
          projectBy="Megento"
          projectlink="https://emusasustainable.com/"
          backgroundImage={emusasustainable}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="viviannaus.com"
          projectBy="Megento"
          projectlink="https://www.viviannaus.com/"
          backgroundImage={viviannaus}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="pgs-ltd.co-uk"
          projectBy="Megento"
          projectlink="https://www.pgs-ltd.co.uk/"
          backgroundImage={pgsLtd}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="primeboucherie.com"
          projectBy="Megento"
          projectlink="https://primeboucherie.com/"
          backgroundImage={primeboucherie}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="thewatchchoice.com"
          projectBy="Megento"
          projectlink="https://thewatchchoice.com/"
          backgroundImage={thewatchchoice}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="Untitled-design.com"
          projectBy="Megento"
          projectlink="https://thewatchchoice.com/"
          backgroundImage={UntitledDesign}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="fusionfirearms.com"
          projectBy="Megento"
          projectlink="https://fusionfirearms.com/"
          backgroundImage={fusionfirearms}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="ttoneart-shop"
          projectBy="Megento"
          projectlink="https://www.toneart-shop.de/"
          backgroundImage={toneartShop}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="goodnaturevibe.com"
          projectBy="Megento"
          projectlink="https://goodnaturevibe.com/"
          backgroundImage={goodnaturevibe}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="punkdimage.com"
          projectBy="Megento"
          projectlink="https://www.punkdimage.com/"
          backgroundImage={punkdimage}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="goblondie.com"
          projectBy="Megento"
          projectlink="https://goblondie.com/"
          backgroundImage={goblondieCom}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={printonline}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="technity.com"
          projectBy="Megento"
          projectlink="https://anotheramazingproductusa.com/"
          backgroundImage={anotheramazing}
        ></ProjectItem>
        {/* ------------- */}
        <ProjectItem
          websiteName="iblackit.com"
          projectBy="Megento "
          projectlink="https://iblackit.com/"
          backgroundImage={iblack}
        ></ProjectItem>
        {/* ------------- */}
        <ProjectItem
          websiteName="chin-chin.cl"
          projectBy="Megento"
          projectlink="https://www.chin-chin.cl/tienda/"
          backgroundImage={ChinChin}
        ></ProjectItem>
        {/* --------------- */}
        <ProjectItem
          websiteName="genbioaz.com"
          projectBy="Megento "
          projectlink="https://genbioaz.com/#home"
          backgroundImage={genesis}
        ></ProjectItem>
        {/* ----------- */}
        <ProjectItem
          websiteName="tramang.com"
          projectBy="Megento"
          projectlink="https://www.tramag.nl/"
          backgroundImage={tramag}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="xogadget.shop"
          projectBy="Megento"
          projectlink="https://www.xogadget.shop/"
          backgroundImage={xogadget}
        ></ProjectItem>
        {/* ------------- */}
        <ProjectItem
          websiteName="odecla.com"
          projectBy="Megento"
          projectlink="https://odecla.com/"
          backgroundImage={odecla}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="blacktulip.online"
          projectBy="Megento"
          projectlink="https://blacktulip.online/"
          backgroundImage={blacktulip}
        ></ProjectItem>
        {/* -------------- */}
        <ProjectItem
          websiteName="cleverpokal.de"
          projectBy="Megento"
          projectlink="https://cleverpokale.de/"
          backgroundImage={cleverpokal}
        ></ProjectItem>

        {/* -----------------------word press projects  */}
        {/* ------------ */}
        <ProjectItem
          websiteName="Dentalart.com.pk"
          projectBy="Wordpress"
          projectlink="https://dentalart.com.pk/"
          backgroundImage={Dentalart}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="richmenbs.com"
          projectlink="https://richmenbs.com/"
          backgroundImage={richmenbs}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="donikah.com"
          projectlink="https://donikah.com/"
          backgroundImage={donikah}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="kim.technity.com.pk"
          projectlink="https://kim.technity.com.pk/"
          backgroundImage={kim}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="kasten-keukens"
          projectlink="https://kasten-keukens.nl/"
          backgroundImage={kasten}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="kimgilllaw.com"
          projectlink="https://kimgilllaw.com/"
          backgroundImage={kimgilllaw}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="integratedlanguages"
          projectBy="Wordpress"
          projectlink="https://www.integratedlanguages.com/"
          backgroundImage={integratedlanguages}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="jollibeeuae"
          projectBy="wordpress"
          projectlink="https://react-icons.github.io/react-icons/search/#q=arrow"
          backgroundImage={jollibeeuae}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="uominiecani"
          projectBy="wordpress"
          projectlink="https://www.uominiecani.net/dogtraining/"
          backgroundImage={uominiecani}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          websiteName="3goodnews.it"
          projectBy="Wordpress"
          projectlink="https://www.3goodnews.it/"
          backgroundImage={goodnews}
        ></ProjectItem>
        {/* ------------ */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="goldenspike.site"
          projectlink="https://goldenspike.site/"
          backgroundImage={goldenspike}
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
    <>
      <h2 className="capitalize text-orange-600 text-2xl text-center py-3 pb-5">
        Webflow Projects
      </h2>
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
    </>
  );
};

// -------------custom--------
const Component6 = () => {
  return (
    <>
      <h2 className="capitalize text-orange-600 text-2xl text-center py-3 pb-5">
        custom Projects
      </h2>
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
