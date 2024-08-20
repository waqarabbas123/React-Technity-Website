import React from "react";
import "./MainContact.css";
import { FaLocationDot } from "react-icons/fa6"; //location icon
import { IoMail } from "react-icons/io5"; //mail icon
import { BsFillTelephonePlusFill } from "react-icons/bs"; //phone icon
// import { Result } from "postcss";

function MainContact() {
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
            <form action="" onSubmit={onSubmit}>
              <div id="input" className="inline-block mb-4">
                <label className="pb-2" htmlFor="fullName">
                  FullName
                </label>
                <br />
                <input
                  type="text"
                  required
                  placeholder="Enter your Name"
                  name="fullName"
                />
              </div>

              <div id="input" className="email inline-block ml-10 mb-4">
                <label className="pb-2" htmlFor="email">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  required
                  placeholder="Enter your Email"
                  name="email"
                />
              </div>

              <br />
              <div id="input" className="inline-block mb-4">
                <label className="pb-2" htmlFor="field">
                  Field
                </label>
                <br />
                <input type="text" placeholder="Your Field" name="field" />
              </div>

              <div id="input" className="phoneNmbr inline-block ml-10">
                <label className="pb-2" htmlFor="mobile">
                  Mobile
                </label>
                <br />
                <input type="text" placeholder="Phone Number" name="mobile" />
              </div>

              <div id="input">
                <label className="pb-2" htmlFor="message">
                  Message
                </label>
                <br />
                <textarea
                  className="textArea h-44 w-[90%] bg-transparent pt-2 pl-4 pb-2 pr-4"
                  name="message"
                  id="message"
                  placeholder="Enter some message"
                ></textarea>
              </div>

              <button id="formBtn" className="mb-3">
                Submit
              </button>
            </form>
            <span className="text-xl pl-4 text-teal-400">{result}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContact;
