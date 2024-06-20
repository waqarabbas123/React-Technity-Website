import React from "react";
import "./ServicesDeatil.css";
function ServiceDetail() {
  return (
    <>
      <div className="ser-detail">
        <div className="ser-detail-home">
          <div className="service-home">
            <h2 className="text-4xl pb-5">Services-details</h2>
            <p>
              <span className="ser-home">Home</span>

              <span className="ser-servies text-base capitalize ">
                Services-details
              </span>
            </p>
          </div>
        </div>
        <div className="ser-detail-second">
          <div className="ser-detail-box1">
            <p>UI-UX Design</p>
            <h2>Design Working Process</h2>
          </div>
          <div className="ser-detail-box2">
              <div className="fristone">
                  
              </div>
              <div className="fristone"></div>
              <div className="fristone"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
