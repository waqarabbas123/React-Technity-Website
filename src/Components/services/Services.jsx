import React from "react";
import "./Services.css";
// -------- import  images
import serviceimage1 from "/service image 1.jpg";
import serviceimage2 from "/serviceimage2.jpg";
import serviceimage3 from "/serviceimage3.jpg";
import serviceimage4 from "/serviceimage4.jpg";
//------import icons
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  return (
    <>
      <div className="service">
        <div className="content">
          <p>what can we do</p>
          <h2>
            Services we can <br /> help you with
          </h2>
          <a className="serviceBtn" href="#">
            See all services
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>

        <div className="imageBox">
          <div className="images imageOne">
            <a href="#">
              <img src={serviceimage1} alt="" />
            </a>
          </div>
          <div className="images imageTwo">
            <a href="#">
              <img src={serviceimage2} alt="" />
            </a>
          </div>
          <div className="images imageThree">
            <a href="#">
              <img src={serviceimage3} alt="" />
            </a>
          </div>
          <div className="images imageFour">
            <a href="#">
              <img src={serviceimage4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
