import whatsapp from "/whatsapp1.png";

import "./Whats.css";

function Whatsapp() {
  return (
    <div>
      <div className="whatsapp">
        <a
          href="https://api.whatsapp.com/send/?phone=923113657733&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Whatsapp;
