import React from "react";
import "./MainContact.css";
import { FaLocationDot } from "react-icons/fa6"; //location icon
import { IoMail } from "react-icons/io5"; //mail icon
import { BsFillTelephonePlusFill } from "react-icons/bs"; //phone icon

function MainContact() {
  return (
    <>
      <div className="maincontact-page">
        <div className="maincontenthome">
          <h2>Contact us</h2>
          <p>
            <span className="fristchild">Home </span> | <span>contact us</span>
          </p>
        </div>
        {/* -------------getting data------- */}
        <div className="getting-data">
          <div className="getting-content">
            <h3>Getting Touch</h3>
            <h2>
              Do you have a project <br /> in your mind?
            </h2>
            <div className="getting-link">
              <p>
                <span>
                  <BsFillTelephonePlusFill />
                </span>
                +923 ************
              </p>
              <p>
                <span>
                  <IoMail />
                </span>
                infotech@gmail.com
              </p>
              <p>
                <span>
                  <FaLocationDot />
                </span>
                Technity Solutions 1st Floor, Farman Plaza, <br /> Near DC
                Office, Khomer Damote, Gilgit.
              </p>
            </div>
          </div>
          <div className="getting-form">
            <form action="">
              <div id="input" className="inline-block mb-4">
                <label  className="pb-2" htmlFor="">FullName</label> <br />
                <input type="text" required />
              </div>

              <div id="input" className="inline-block ml-10 mb-4">
                <label  className="pb-2" htmlFor="">Email</label> <br />
                <input type="email" required />
              </div>
              <br />
              <div id="input" className="inline-block mb-4">
                <label className="pb-2" htmlFor="">Prototype</label> <br />
                <input type="text" />
              </div>

              <div id="input" className="inline-block ml-10">
                <label  className="pb-2" htmlFor="">Mobile</label> <br />
                <input type="number" />
              </div>

              <div id="input">
                <label  className="pb-2" htmlFor="message">FullName</label> <br />
                <textarea
                  className="h-44 bg-transparent pt-2 pl-4 pb-2 pr-4"
                  name="message"
                  id="message"
                  cols={65}
                  placeholder="Enter some message"
                ></textarea>
              </div>
              <button id="formBtn">Submit </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContact;
