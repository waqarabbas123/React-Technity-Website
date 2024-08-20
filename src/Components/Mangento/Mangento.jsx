import "./Mangento.css";
import ProjectItem from "../ProjectItem/ProjectItem";

// import AliImg from "/background img.jfif"; //AliImg

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

function Mangento() {
  return (
    <>
      <h2 className="capitalize text-teal-600 text-2xl text-center py-3 pb-5">
        mangento Projects
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-[30px]">
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
        {/* ----------------------------------------------------------- */}
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
      </div>
    </>
  );
}

export default Mangento;
