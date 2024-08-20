
import "./WordPress.css";
import ProjectItem from "../ProjectItem/ProjectItem";
// ----------images-------

// import AliImg from "/background img.jfif"; //AliImg
import Dentalart from "/wordpress/dentalart.jpeg";
import richmenbs from "/wordpress/richmenbs.png";
import donikah from "/wordpress/donikah.png";
import kim from "/wordpress/kim.png";
import kasten from "/wordpress/kasten.png";
import kimgilllaw from "/wordpress/kim-gill-law.jpeg";
import integratedlanguages from "/wordpress/integratedlanguages.jpg";
import jollibeeuae from "/wordpress/jollibeeuae.jpg";
import goodnews from "/wordpress/3goodnews.png";
import uominiecani from "/wordpress/uominiecani.jpg";
import goldenspike from "/wordpress/goldenspike.jpg";


function WordPress() {
  return (
    <>
      <h2 className="capitalize text-teal-600 text-2xl text-center py-3 pb-5">Wordpress Projects</h2>
      <div className="wordpress ">
        {/* -----1---- */}
        <ProjectItem
          websiteName="Dentalart.com.pk"
          projectBy="Wordpress"
          projectlink="https://dentalart.com.pk/"
          backgroundImage={Dentalart}
        ></ProjectItem>
        {/* -----2---- */}
        <ProjectItem
          projectBy="Wordpress"
          websiteName="Richmenbs.com"
          projectlink="https://richmenbs.com/"
          backgroundImage={richmenbs}
        ></ProjectItem>
        {/* -----3---- */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="donikah.com"
          projectlink="https://donikah.com/"
          backgroundImage={donikah}
        ></ProjectItem>
        {/* -----4---- */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="kim.technity.com.pk"
          projectlink="https://kim.technity.com.pk/"
          backgroundImage={kim}
        ></ProjectItem>
        {/* -----5---- */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="kimgilllaw.com"
          projectlink="https://kimgilllaw.com/"
          backgroundImage={kimgilllaw}
        ></ProjectItem>
        {/* -----6---- */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="kasten-keukens"
          projectlink="https://kasten-keukens.nl/"
          backgroundImage={kasten}
        ></ProjectItem>
        {/* -----7---- */}
        <ProjectItem
          websiteName="integratedlanguages"
          projectBy="Wordpress"
          projectlink="https://www.integratedlanguages.com/"
          backgroundImage={integratedlanguages}
        ></ProjectItem>
        {/* -----8---- */}
        <ProjectItem
          websiteName="jollibeeuae"
          projectBy="wordpress"
          projectlink="https://jollibeeuae.com/"
          backgroundImage={jollibeeuae}
        ></ProjectItem>
        {/* -----9---- */}
        <ProjectItem
          websiteName="uominiecani"
          projectBy="wordpress"
          projectlink="https://www.uominiecani.net/dogtraining/"
          backgroundImage={uominiecani}
        ></ProjectItem>
        {/* -----10---- */}
        <ProjectItem
          websiteName="3goodnews.it"
          projectBy="Wordpress"
          projectlink="https://www.3goodnews.it/"
          backgroundImage={goodnews}
        ></ProjectItem>
        {/* -----11---- */}
        <ProjectItem
          projectBy="wordpress"
          websiteName="goldenspike.site"
          projectlink="https://goldenspike.site/"
          backgroundImage={goldenspike}
        ></ProjectItem>
      </div>
    </>
  );
}

export default WordPress;
