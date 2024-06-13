import React from "react";
import "./MainAbout.css";
import image from "/serviceimage3.jpg";
import Fact from "../../Components/fact/Fact";
import Footer from "../../Components/Footer/Footer";

function MainAbout() {
  return (
    <>
      <div className="main">
        {/* ---------about home-------- */}
        <div className="abouthome">
          <h2>About us</h2>
          <p>
            <span className="fristchild">Home </span> | <span>About us</span>
          </p>
        </div>
        {/* --------------about agency=-------- */}
        <div className="aboutegency">
          <div className="allcontent">
            <div className="imgs firstcontent">
              <h3>about our agency</h3>
              <h2>
                Your trusted partner <br /> for business
              </h2>
              <p>
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <span className="  text-4xl text-orange-600 ml-3">___</span>
            </div>
            <div className="imgs">
              <img src={image} alt="" />
            </div>
            <div className="imgs third">
              <img src={image} alt="" />
            </div>
            <div className="imgs">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        {/* --------------fact------------ */}
        <div className="factcorner">
          <Fact />
        </div>
        {/* ---------------- */}
        <div className="choose-content">
          <div className="choosefirst">
            <div className="back-container">.......</div>
            <div className="front-container">
              <img src={image} alt="" width={400} />
            </div>
          </div>
          <div className="choose-second">
            <h3>Why choose us</h3>
            <h2>
              Highly experienced <br /> pepole with us
            </h2>
            <p>
              This is the main factor that sets us apart from our competition
              and allows us to <br />
              deliver a specialist business consultancy service. Our team
              applies its wide-ranging <br /> experience to determining. Through
              our years of experience, we’ve also learned that while. <br />
              This is the main factor that sets us apart from our competition
              and allows us to deliver a <br />
              specialist business consultancy service. Our team applies its
              wide-ranging experience to <br />
              determining.
            </p>
            <span className="  text-4xl text-orange-600 ml-3">___</span>

          </div>
        </div>
        {/* -------slider------- */}
        {/* ------------footer-------------- */}
          <div className="footerHome">
              <Footer />
          </div>
      </div>
    </>
  );
}

export default MainAbout;
