import React from "react";
import "./ServicesDeatil.css";
import { FaArrowRightLong } from "react-icons/fa6"; //icons

function ServiceDetail() {
  return (
    <>
      <div className="ser-detail">
        <div className="ser-detail-home">
          <div className="service-home">
            <h2 className="text-4xl pb-3">Services-details</h2>
            <p>
              <span className="ser-home">Home</span>

              <span className="ser-servies text-base capitalize ">
                Services-details
              </span>
            </p>
          </div>
        </div>
        {/* --------------second portion=--------- */}
        <div className="ser-detail-second">
          <div className="ser-detail-box1">
            <p>UI-UX Design</p>
            <h2>Design Working Process</h2>
          </div>

          <div className="ser-detail-box2">
            <div className="fristone">
              <img
                src="https://arino-react.vercel.app/images/icons/service_icon_2.svg"
                alt=""
              />
              <h2>Sketching</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore quae eius commodi sint quod tempora nulla illo
                doloribus alias.
              </p>
            </div>
            <div className="fristone">
              <img
                src="	https://arino-react.vercel.app/images/icons/service_icon_2.svg"
                alt=""
              />
              <h2>wireframing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore quae eius commodi sint quod tempora nulla illo
                doloribus alias.
              </p>
            </div>
            <div className="fristone">
              <img
                src="	https://arino-react.vercel.app/images/icons/service_icon_3.svg"
                alt=""
              />
              <h2>Prototyping</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore quae eius commodi sint quod tempora nulla illo
                doloribus alias.
              </p>
            </div>
          </div>
        </div>
        {/* --------------3rd portion----------- */}
        <div className="ser-detail-third">
          <div className="secondone">
            <img
              className="rounded-2xl"
              src="https://arino-react.vercel.app/images/service_img_1.jpeg"
              alt=""
            />
          </div>
          <div className="secondone">
            <h2>
              Below our most design <br /> related services
            </h2>
            <div className="links">
              <div id="box1">
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>
              </div>
              <div id="box2">
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <a href="/">web page design</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -----------4th portion-------- */}
        <div className="ser-detail-forth">
         
         
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
