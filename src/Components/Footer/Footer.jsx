import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6"; // arrow icon
import { FaTwitter } from "react-icons/fa"; // twitter icon
import { FaLinkedinIn } from "react-icons/fa6"; //linkedin icon
import { FaYoutube } from "react-icons/fa"; //youtube icon
import { FaFacebookF } from "react-icons/fa"; //facebook icon

function Footer() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d1b9050a-d5df-4504-b554-c543621a15d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
          <div className="triangle1 move-left-to-right"></div>
          <div className="triangle2 move-left-to-right"></div>
          <div className="triangle3 move-left-to-right"></div>
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
              Welcome to our studio! We <br /> employ people who have passion{" "}
              <br /> for design and marketing. It is a <br /> perfect
              combination of professionalism <br /> and creative approach.
            </p>
            <div className="social">
              <div className="footer-icons">
                <a href="https://x.com/Technity323" target="_blank">
                  <FaTwitter />
                </a>
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
                <a
                  href="https://www.youtube.com/@technity9748/featured"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </div>
              <div className="footer-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100064101459658"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
          <div className="second-data">
            <h2>
              <Link>Services</Link>
            </h2>
            <p>
              <Link to="/aiPage">Artifical Intelligence</Link>
            </p>
            <p>
              <Link to="/Webdevelopment">Web Development</Link>
            </p>
            <p>
              <Link to="/AppDevelopment">App Development</Link>
            </p>
            <p>
              <Link to="/vedioEdit">Vedio Editing</Link>
            </p>
          </div>
          <div className="second-data">
            <h2>Contact us</h2>
            <p>+92 311 3657733</p>
            <p>info@technity.com.pk</p>
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
              <form action="" onSubmit={onSubmit}>
                <input type="email" placeholder="Enter Your Email" />
                <button id="sendbtn"> Send </button>
              </form>
            </div>
            <span className="text-teal-400 text-xl block py-2">{result}</span>
            <p>
              Reach out for personalized <br /> solutions and expert support{" "}
              <br /> anytime, anywhere
            </p>
          </div>
        </div>
        <div className="footerlast">
          <p>
            technity solution <span className="text-teal-400">©</span> 2022
            Laralink.
          </p>
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
