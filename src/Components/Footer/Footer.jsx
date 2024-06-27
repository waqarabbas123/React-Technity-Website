import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
          <Link to="/MainContact">
            Apply For Meeting
            <span>
              <FaArrowRight />
            </span>
          </Link>
          <div class="triangle1 move-left-to-right"></div>
          <div class="triangle2 move-left-to-right"></div>
          <div class="triangle3 move-left-to-right"></div>
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
                <a
                  href="https://www.linkedin.com/company/technity-solutions-/posts/?feedView=all"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="footer-icons">
                <FaYoutube />
              </div>
              <div className="footer-icons">
                <a href="https://www.facebook.com/profile.php?id=100064101459658" target="_blank">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
          <div className="second-data">
            <h2>
              <a href="#">Services</a>
            </h2>
            <p>
              <a href="#">AI</a>
            </p>
            <p>
              <a href="#">Web Development</a>
            </p>
            <p>
              <a href="#">Digital Marketing</a>
            </p>
            <p>
              <a href="#">Vedio Editing</a>
            </p>
          </div>
          <div className="second-data">
            <h2>Contact us</h2>
            <p>+92-3************</p>
            <p>technity@gmail.com</p>
            <p>
              <a
                href="https://maps.app.goo.gl/BcmRiTar2LzQ16eZ6"
                target="_blank"
              >
                Technity Solutions 1st Floor, <br /> Farman Plaza, Near DC
                Office, <br /> Khomer Damote, Gilgit
              </a>
            </p>
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
