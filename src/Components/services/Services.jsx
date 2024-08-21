import "./Services.css";
import { Link } from "react-router-dom";
// -------- import  images
// import serviceimage2 from "/service image 21.jpg";
import cmsImg from "/cmsimg3.jpg"
import React4 from "/serviceimage4.jpg";
import aiImg from "/aiPortfolioimg1.jpg";
import python from "/pythonImg1.jpg"
//------import icons
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  return (
    <>
      <div className="service">
        <div className="content">
          <p>what can we do</p>
          <h2>Services we can help you <br /> with</h2>
          <h3>
            <Link className="serviceBtn" to="/Services">
              See all services
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </h3>
        </div>

        <div className="imageBox">
          <div className="images imageOne">
            <Link to="/Webdevelopment">
              <img src={cmsImg} alt="" />
            </Link>
          </div>
          <div className="images imageTwo">
            <Link to="/vedioEdit">
              <img src={aiImg} alt="" />
            </Link>
          </div>
          <div className="images imageThree">
            <a href="#">
              <img src={python} alt="" />
            </a>
          </div>
          <div className="images imageFour">
            <a href="#">
              <img src={React4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
