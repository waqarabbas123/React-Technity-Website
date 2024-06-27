import React from "react";
import "./Fact.css";
function Fact() {
  return (
    <div className="outerFact">
      <div className="fact">
        <div className="frist">
          <h2>Our Fact Fun</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error <br /> voluptatem
            accusantium doloremque laudantium, aperiam, eaque ipsa quae ab illo
            inventore veritatis.
          </p>
        </div>
        <div className="second">
          <div className="box1">
            <h2>40k</h2>
            <p>
              <span>+</span> Global Happy Clients
            </p>
          </div>
          <div className="box1">
            <h2>50k</h2>
            <p>
              <span>+</span> project completed
            </p>
          </div>
          <div className="box1">
            <h2>245k</h2>
            <p>
              <span>+</span> team members
            </p>
          </div>
          <div className="box1" id="lastbox">
            <h2>550k</h2>
            <p>
              <span>+</span> digital products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
