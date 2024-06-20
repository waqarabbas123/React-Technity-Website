import React from "react";
import "./Footer.css";

import { FaArrowRight } from "react-icons/fa6"; // arrow icon
import { FaTwitter } from "react-icons/fa"; // twitter icon
import { FaLinkedinIn } from "react-icons/fa6"; //linkedin icon
import { FaYoutube } from "react-icons/fa"; //youtube icon
import { FaFacebookF } from "react-icons/fa"; //facebook icon

function Footer() {
  return (
    <>
      <div className="footer">
        {/* -------------upper box------------- */}
        <div className="upperbox">
          <h2>
            Let’s disscuse make <br />
            something cool together
          </h2>
          <a href="#">
            Apply For Meeting
            <span>
              <FaArrowRight />
            </span>
          </a>
          <div class="triangle1"></div>
          <div class="triangle2"></div>
          <div class="triangle3"></div>
        </div>
        {/* ----------content data--------- */}
        <div className="content-data">
          <div className="first-data">
            <h2>
              Tech
              <span>Nity</span>
              <b>Make IT</b>
            </h2>
            <p>
              Welcome to arino sed ut <br /> perspiciae omunde omnis iste <br />{" "}
              natus error sitort voluptatem <br /> accusantium.
            </p>
            <div className="social">
              <div className="footer-icons">
                <FaTwitter />
              </div>
              <div className="footer-icons">
                <FaLinkedinIn />
              </div>
              <div className="footer-icons">
                <FaYoutube />
              </div>
              <div className="footer-icons">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="second-data">
            <h2>
              <a href="#">Services</a>
            </h2>
            <p>
              <a href="#">UI/UX design</a>
            </p>
            <p>
              <a href="#">web development</a>
            </p>
            <p>
              <a href="#">digital marketing</a>
            </p>
            <p>
              <a href="#">React Development</a>
            </p>
          </div>
          <div className="second-data">
            <h2>Contact us</h2>
            <p>+92-3************</p>
            <p>technity@gmail.com</p>
            <p>location</p>
          </div>
          <div className="last">
            <h2>Subscribe</h2>
            <div className="input-data">
              <input type="email" placeholder="Enter Your Email" />
              <button id="sendbtn"> Send </button>
            </div>
            <p>
              At vero eos et accusamus et iusto <br /> odio as part dignissimos
              ducimus <br /> qui blandit.
            </p>
          </div>
        </div>
        <div className="footerlast">
          <p>Copyright © 2022 Laralink.</p>
          <p id="box">
             <span id="frist"> Terms of Use</span>|
            <span id="last">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
