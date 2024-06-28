import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// ----icons---
import { FaLongArrowAltRight } from "react-icons/fa";
function Home() {
  return (

      <div className="home ">
        <div class="triangleHome1 move-left-to-right"></div>
        <div class="triangleHome2 move-left-to-right"></div>
        <div class="triangleHome3 move-left-to-right"></div>
        <div className="upper">
          <h2>
            Creativity In <br /> Our Blood Line
          </h2>
          <p className="social-side">
            follow us -- <span className="behance"> behance --</span>
            <span className="twitter">Twitter</span>
          </p>
        </div>
        <div className="lowerContent">
          <h3>
            <Link to="/MainContact">
              Get a Quote
              <span>
                <FaLongArrowAltRight />
              </span>
            </Link>
          </h3>
          <p>
            We deliver best problem solving solution for our client and <br />{" "}
            provide finest finishing product in present and upcoming future.
          </p>
        </div>
        <div className="box">
          <div className="dot">
            
          </div>
        </div>
      </div>
  );
}

export default Home;
