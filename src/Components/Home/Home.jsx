import React from "react";
import "./Home.css";
// ----icons---
import { FaLongArrowAltRight } from "react-icons/fa";
function Home() {
  return (
    <>
      <div className="home " >
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
            Get a Quote <span><FaLongArrowAltRight /></span>
          </h3>
          <p>
            We deliver best problem solving solution for our client and <br />{" "}
            provide finest finishing product in present and upcoming future.
          </p>

        </div>
        <div className="box">
            
        </div>
      </div>
    </>
  );
}

export default Home;
