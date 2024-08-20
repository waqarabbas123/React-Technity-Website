
import "./ServicesDeatil.css";
import { FaArrowRightLong } from "react-icons/fa6"; //icons
import companyImg from "/3nd-Second-Banner-Final-1.png"
import { Link } from "react-router-dom";
import circle from "/circle.png"
import triangle from "/triangle.png"

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
              <img src={triangle} alt="" width={150} />
              <h2>Programing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore quae eius commodi sint quod tempora nulla illo
                doloribus alias.
              </p>
            </div>
            <div className="fristone">
              <img src={circle} alt="" width={150} />
              <h2>CMS Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore quae eius commodi sint quod tempora nulla illo
                doloribus alias.
              </p>
            </div>
            <div className="fristone">
              <img src={triangle} alt="" width={150} />
              <h2>Vedio Editing</h2>
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
            <img className="rounded-2xl" src={companyImg} alt="" />
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
                  <Link to="/Webdevelopment">Web Development</Link>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/vedioEdit">Vedio Editing</Link>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/AppDevelopment">App Development</Link>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/MainContact">SEO</Link>
                </p>

                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/aiPage">Artifical Intelligence</Link>
                </p>
              </div>
              <div id="box2">
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/MainContact">web page design</Link>
                </p>
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/MainContact">web page design</Link>
                </p>
                <p>
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <Link to="/MainContact">web page design</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -----------4th portion-------- */}
        <div className="ser-detail-forth"></div>
      </div>
    </>
  );
}

export default ServiceDetail;
