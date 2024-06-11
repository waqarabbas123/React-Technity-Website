import React from "react";
import "./Award.css";
function Award() {
  return (
    <>
      <div className="award">
        <div className="awardContent">
          <p>Our Award</p>
          <h2>
            We get multiple <br /> awards
          </h2>
        </div>
        <div className="boxContent">
          <div className="award-year">
            <h3>2019</h3>
            <h2>google Award</h2>
            <p>website of the day</p>
            <p>Mobile exelence</p>
          </div>
          <div className="award-year">
            <h3>2020</h3>
            <h2>New Technology innovation</h2>
            <p>website of the day</p>
            <p>Mobile exelence</p>
          </div>
          <div className="award-year">
            <h3>2021</h3>
            <h2>Css Award Design</h2>
            <p>website of the day</p>
            <p>Mobile exelence</p>
          </div>
          <div className="award-year">
            <h3>2022</h3>
            <h2>UI/UX Design</h2>
            <p>website of the day</p>
            <p>Mobile exelence</p>
          </div>
        </div>
        <div className="sidebox">
          {/* sidebox */}
        </div>
      </div>
    </>
  );
}

export default Award;
